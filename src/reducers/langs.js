import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const languagesReducer = (state = initialState.langs, action) => {
    switch (action.type) {
        case actionTypes.getLanguages:
            if (action.data && action.data.length > 0) {
                const langs = {};
                action.data.map(repoLanguages => {
                    if (repoLanguages.data) {
                        const {
                            data
                        } = repoLanguages;
                        // Adding all similar languages in different repos in one single key together
                        return Object.keys(data).map(key => {
                            if (!langs[key])
                                langs[key] = data[key];
                            else langs[key] += data[key];
                        });
                    }
                });
                // Return sorted languages and limited to 8 languages
                const sortedLangs = sortLanguages(langs, 8);
                // Return languages with their percentage
                return calculatePercentage(sortedLangs);
            } else return {};
        default:
            return state;
    }
}

const sortLanguages = (langsObj, limit) => {
    return Object.keys(langsObj)
        // Sort languages in descending order,
        // Assuming the more lines of code in a language, the more percentage it will have,
        // Then limiting the result to a desired limit
        .sort((lang1, lang2) => langsObj[lang2] - langsObj[lang1])
        .slice(0, limit)
        .reduce(function (newObj, current) {
            newObj[current] = langsObj[current]
            return newObj;
        }, {})
}

const calculatePercentage = (langs) => {
    // Get the sum of all languages lines of code,
    // Then calculate the percentage of each one,
    // And eliminate the ones that are less that 1%
    const sum = Object.values(langs).length > 0 && Object.values(langs)
        .reduce((num1, num2) => num1 + num2);
    Object.keys(langs).map(key => {
        langs[key] =
            parseInt(langs[key] / sum * 100);
        if (langs[key] < 1) {
            delete langs[key];
        };
    });
    return langs;
}
export default languagesReducer;