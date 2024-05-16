module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','b8e789855f862ce7c8c3a4462a6d07a3a8dd44e31cfb9802c4390fec4ae17e59'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','3d3e293ed500a14a21ae7bc2f16012d6'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','eRo1g1u1nZiHCy2d1P03QA=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
