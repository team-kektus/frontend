export default function RestangularConfig(RestangularProvider) {
  RestangularProvider.setFullResponse(true)
  RestangularProvider
    .setBaseUrl('/api/v1')
    .setRequestSuffix('.json')
    .setDefaultHeaders({'Content-Type': 'application/json; charset=UTF-8'})
}

RestangularConfig.$inject = ['RestangularProvider']
