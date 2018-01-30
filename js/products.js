(function() {
 
    angular.module('store-products', [ ]) 
    
    .directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function() {
                this.imageIndex = 0;
                this.currentImageChange = function(imageNumber) {
                  console.log(imageNumber);
                  this.imageIndex = imageNumber || 0;
                }; 
            },
            controllerAs: 'gallery'
        };
    })

    .directive('productTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function() {
                this.tab = 1;          
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;  
                };
            },
            controllerAs: 'tab'
        };
    })

    .directive('productDescription', function() {
        return {
        restrict: 'E',
        templateUrl: 'product-description.html'
        };
    })

    .directive('productSpecifications', function() {
        return {
        restrict: 'E',
        templateUrl: 'product-specifications.html'
        };
    })

    .directive('productReviews', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-reviews.html',
            controller: function() {
                this.review = {};
                this.addReview = function(product) {
                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl'
        };
    });        

})();