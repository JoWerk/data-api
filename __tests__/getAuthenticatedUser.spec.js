const { Octokit } = require("octokit");

const token = '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'
const plan_token = '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'
const octokit = new Octokit({ auth: token })

describe("get authenticated user info", () => {
    test("user without token", async () => {
      const token = ''
      const octokit = new Octokit({ auth: token })
      try {
        const response = await octokit.rest.users.getAuthenticated();
      }
      catch (e) {
        expect(e.status).toEqual(401)
      }
    }),
    test("user without plan permissions", async () => {
      const token = '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'
      const octokit = new Octokit({ auth: token })
      const user = await octokit.rest.users.getAuthenticated();
      expect(user.data).not.toHaveProperty("plan")
    }),
    test("user with free plan permissions", async () => {
      const plan_token = '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'
      const octokit = new Octokit({ auth: plan_token })
      const user = await octokit.rest.users.getAuthenticated();
      expect(user.data).toHaveProperty("plan")
      expect(user.data.plan.name).toEqual("free")
    })
  });
