export default function() {
  return {
    scope: {
      fileread: "="
    },
    link: function(scope, element, attributes) {
      element.bind("change", function(changeEvent) {
        let file = changeEvent.target.files[0]
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
          scope.$apply(function() {
            scope.fileread = {
              base64: loadEvent.target.result,
              file: file
            };
          });
        }
        reader.readAsDataURL(file);
      });
    }
  }
}
