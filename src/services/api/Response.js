export default class APIResponse {
    #status
    #results

    setStatus(status) {
        this.#status = status
    }

    setResults(results) {
        this.#results = results
    }
}