const { Octokit } = require("octokit");

describe("get contextial information for user", () => {
    test("owner of repo", async () => {
      const repo_token = 'add repo token here'
      const octokit = new Octokit({ auth: repo_token })
      const context = await octokit.rest.users.getContextForUser({
        username: 'JoWerk',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

      expect(context.data.contexts).toHaveLength(0);
    })
  });