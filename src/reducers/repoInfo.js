import actionTypes from "../actions/actionTypes";
import initialState from "../initialState";

const repoInfoReducer = (state = initialState.repos, action) => {
    switch (action.type) {
        case actionTypes.getRepoInfo:
            if (action.data) {
                let repos = action.data.map((repo) => {
                    return {
                        ownerID: repo.owner.id,
                        // Get popularity of a repo by adding their forks and stars counts
                        popularity: repo.forks_count + repo.stargazers_count,
                        name: repo.name,
                        lang: repo.language,
                        link: repo.html_url,
                        description: repo.description,
                        yearFrom: repo.created_at,
                        forksCount: repo.forks_count,
                        starsCount: repo.stargazers_count,
                        yearTo: repo.pushed_at
                    }
                });
                // Gather only repositories that are not forks from others,
                // Then sort them in a descending order of popularity,
                // Then limit the results to 5 repos only
                let nonForksRepos = repos
                    .filter((repo) => !repo.fork)
                    .sort((repo1, repo2) => repo2.popularity - repo1.popularity)
                if (nonForksRepos.length > 5) nonForksRepos = nonForksRepos.slice(0, 5)
                return nonForksRepos;
            }
            break;
        default:
            return state;
    }
}
export default repoInfoReducer;