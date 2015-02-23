#Step 3: Style the Category page

The CSS naming convention we use is a modified version of BEM that we call CSM (Component, Sub-component, Modifier). For more information on CSM and on all of our CSS best practices, read the CSS section of our [Mobify code style project](https://github.com/mobify/mobify-code-style/tree/master/css).


To follow our best practices, we often add classes to the desktop HTML and we make changes to the markup for elements. This step covers a few examples of our best practices. We also show you how to add the SCSS to style this page.

##Task

### Update the Template HTML

There are a few different ways to affect HTML that the template outputs. The first way is to modify the template file iteself.

1. On the command line, enter the `grunt preview` command to start the preview.
2. Work through the third section, [Preview the Adaptive.js Site](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) of the Getting Started (New Project) guide. Use the `http://www.merlinspotions.com/potions` URL for the Site URL form field.

    Refresh the page in your browser as you update the template HTML and SCSS to view the changes.

3. In Finder, locate your `workshop--adaptive-site` directory. Find the `adaptation/templates` folder. Open the `category.dust` dust template file with an editor app.
4. Wrap the `{title}` key in a `div` element with the `t-category__title` class.

    ![Wrap title in a div](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/AoTbBtkdqrBznRL/Screen%20Shot%202015-01-16%20at%201.25.40%20PM.png)

5. Save the `category.dust` file and close it.

Inspect the class name to understand how it follows our [class naming convention](https://github.com/mobify/mobify-code-style/tree/master/css/class-naming-conventions#class-naming-conventions). The `t-` prefix indicates that the class is part of a template ([learn more on css class prefix conventions](https://github.com/mobify/mobify-code-style/tree/master/css/class-naming-conventions#class-prefix-conventions)).
The next part indicates the name of the template, which is `category`.
Finally the  `__title` part indicates a title subcomponent of the `category` template.

Another way to change the output HTML is to modify the elements that the view returns.

1. In Finder, navigate to the `adaptation/views` folder. Open the `category.js` category view file in your editor app.
2. Add a `postProcess` function to the view. Ensure that this `postProcess` first calls the `postProcess` function in the base view file.

    ```javascript
    {
        template: template,
        extend: Base, 
        postProcess: function() {
            context = Base.postProcess(context);

            return context;
        },

        context: {
    ```

    The `postProcess` function executes after all the elements for the view are selected, so we can grab one of those elements and make a few changes to it. The base view contains its own `postProcess` function that makes a few global changes. In order to keep these changes, call the `postProcess` for the base. More information on the `postProcess` function can be found in the [Views](https://cloud.mobify.com/docs/adaptivejs/adapting/views/#/postprocess/) guide.

3. Store the `context.listing` Zepto object in a variable.
4. Add the class `c-product-list` to the listing element. The class name `c-product-list` indicates that it is a self-contained component. By the application of the `c-product-list` class name to the listing element, the listing element acts as the container for the component.
5. Add the class `c-product-list__item` to each list item HTML tag and remove the inline styles. The `c-product-list__item` class name indicates that it is a sub-component of the `c-product-list` component. The `c-product-list__item` class name and must be a child of the `c-product-list` element.
6. Add the class `c-price` to the `.price` div. The `c-price` class name is another self-contained component.

    The `c-` prefix indicates that the element is a component. In our case, we deal with two components: `c-product-list` (which has a sub-component item), and `c-price`.

Your newly modified view file looks like this:

![Update listing element](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/zcWcEqnWvtO36hx/Screen%20Shot%202015-02-06%20at%202.21.32%20PM.png)

##Task

### Add SCSS files for the Template and Components

1. Create a new file under assets/styles/templates called `_category.scss` following the [file naming convention](https://github.com/mobify/mobify-code-style/tree/master/css/sass-best-practices#filename-naming-convention).
2. Add the following styles for the `t-category__title` element

    ```scss
    // Category
    // ===

    .t-category {
    }


    // Category Title
    // ---

    .t-category__title {
        padding: 0 $h-space;
    }
    ```

3. Open the file `_templates.scss` found under /assets/styles. This is where all of the template SCSS files get imported.
4. Add the `_category.scss` file to the list of template SCSS partials.

    ```scss
    // Page Templates
    // --------------

    @import "templates/home";
    @import "templates/category";
    ```

5. Create a new file under assets/styles/components called `_product-list.scss` for the product-list component.
6. Add the following styles:

    ```scss
    // Product List
    // ===

    .c-product-list {
        @include clearfix;

        font-family: $serif;
        text-align: center;
    }


    // Product List Item
    // ---

    .c-product-list__item {
        float: left;

        display: block;
        width: 50%;
        padding: $v-space $small-h-space;

        color: $grey-20;

        &:nth-child(odd) {
            clear: both;
        }
    }
    ```

7. Open the file `_components.scss` found under /assets/styes. This is where all of the component SCSS files get imported.
8. Add the `_product-list` scss file to the list of components

    ```scss
    // Project Components
    // ------------------
    //
    // Styles for project-specific components.
    //
    // eg. @import 'components/button';

    @import 'components/card';
    @import 'components/product-list';
    ```

9. Repeat steps 5-8 to add a component file called `_price.scss` with the following styles:

    ```scss
    // Price
    // ===

    .c-price {
        color: $accent-color;
        font-family: $sans-serif;
        font-weight: bold;
    }
    ```

10. View the potions category page in your browser.

    The page should look like this:

    ![Potions page](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/sYtMKGfRqXkKOr4/Screen%20Shot%202015-01-16%20at%202.04.06%20PM.png)

11. Stop preview by typing `ctrl c` in the terminal window.

##Ready to Continue?

Once the page looks good and you're ready to move on, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-4-update-header
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-4-update-header/README.md)
