exports.handler = async (event, context) => {
  // ℹ️ `event` contains information about the request, like the URL path, query
  // parameters, headers and the body.
  const { body, queryStringParameters } = event

  // ℹ️ `context` is a metadata object. Among other things, it contains user data
  // coming from Netlify Identity.
  const { identity, user } = context.clientContext

  return {
    // 👍 Return 200 when the request has been successful.
    statusCode: 200,

    // 💬 The response is a string. To return JSON, use JSON.stringify().
    body: JSON.stringify({ message: `Hello, ${queryStringParameters.name}` }),
  }
}
