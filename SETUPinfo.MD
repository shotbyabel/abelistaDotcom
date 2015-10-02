### Adding Ladda Button Animations to Angular JS
1. inside your angular module file `main.js`

2. 


`var app = angular.module('myApp', [
  'angular-ladda'

]});`



3. you can now use them as directives like on this form register button example

```html
    <div class="form-group">
      <button class="btn btn-primary"
              ladda="submitting"
              data-style="expand-right"
              type="submit">
          <span ng-show="submitting">Registering</span>
          <span ng-show="!submitting">Register</span>        
      </button>
    </div>
  </form >
```

4. and you will ofcourse have to write the logic in that particlar angular **Controller** function 

`$scope.submitting = false;`

`$scope.onSubmit = function () {` //$scope variable gives us access to the html
 `$scope.submitting = true;`

and finish by adding error and success handler logic

### Setting up Angular Auto-Validate
**form forms, it works with Bootstrap and Foundation**

1. 

```javascript

  var app = angular.module('myApp', [
    'jcs-autoValidate'

]});

```

2. REQUIRE it on the forms.. (but read more about how to use it)

```html
<form ng-submit="onSubmit()"
        novalidate="novalidate">
    <div class="form-group" >
      <label for="name" class="control-label">Name</label >
      <input type="text"
             class="form-control"
             ng-model="formModel.name"
             id="name"
             required="required" >
    </div >
    <div class="form-group">
      <label for="email" class="control-label">Email</label >
      <input type="email"
             class="form-control"
             ng-model="formModel.email"
             id="email"
             required="required" >
    </div >

    ```
    __________________

###Font Awesome Use

(example code)[https://fortawesome.github.io/Font-Awesome/examples/]

(set up)[https://fortawesome.github.io/Font-Awesome/get-started/]

(icons)[https://fortawesome.github.io/Font-Awesome/icons/]
