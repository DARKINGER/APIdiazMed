
const OpenAPISnippet = require('openapi-snippet')

fetch ("http://localhost:8085/api-docs-json")
    .then(respuesta=>respuesta.json())
        .then(desc => {
            const openApi = desc // Open API document
            const targets = ['node_unirest','csharp_restsharp','python_python3'] // array of targets for code snippets. See list below...
            
            try {
              // either, get snippets for ALL endpoints:
                const results = OpenAPISnippet.getSnippets(openApi, targets) // results is now array of snippets, see "Output" below.
                console.log(results)
                const results2 = OpenAPISnippet.getEndpointSnippets(openApi, '/usuarios/', 'get', targets)
                console.log(results2)
            } catch (err) {
              // do something with potential errors...
                console.log(err)
            }
        })


