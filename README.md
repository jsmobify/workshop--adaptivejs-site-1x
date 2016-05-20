#Set Up the Project

One of the tools that you installed previously was the Adaptive.js Generator. Set up the folder structure for a new project with this generator.

##Create a New Project with the Adaptive.js Generator

Ensure that you have the terminal open to the workshop `workshop--adaptivejs-site` folder.
If you closed your terminal, launch the Terminal app again change directories the workshop folder with the command:

    cd path/to/project/workshop--adaptivejs-site

Ensure that you change the path to reflect your project folder structure.

1. Run yeoman with the command:

    ```
    yo adaptivejs
    ```
    
2. If this is your first time running Yeoman, answer the setup questions. If the Yeoman README License opens in the VI editor, read the document and enter `:q` to quit it.

3. Enter `workshop--adaptivejs-site` for the project name.

    ![Project Name](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/UAfzq5whtPon5UV/Screen%20Shot%202015-01-22%20at%204.12.37%20PM.png)

4. Enter `http://www.merlinspotions.com` for the project URL.

    ![Project URL](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/7buMlNzOgC2laMf/Screen%20Shot%202015-01-22%20at%204.13.48%20PM.png)

5. Enter `y` to use Dust templating.

    ![Dust Templating](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/oqbf2lAduDXzTTk/Screen%20Shot%202015-01-22%20at%204.55.01%20PM.png)

    We use Dust templating to build the HTML structure of our pages. Learn more about Dust templating in our [Dust.js Cheat Sheet](https://cloud.mobify.com/docs/adaptivejs/adapting/dustjs-cheat-sheet/).

6. Enter `y` to use the Mobify Vellum framework.

    ![Vellum](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/yVuAllBWOV3DbdI/Screen%20Shot%202015-01-22%20at%204.18.08%20PM.png)

    Vellum is a framework that we created to add default styles to the mobile site adaptation project. More information on Vellum can be found [here](https://github.com/mobify/vellum).

7. Enter `y` to use the Nightwatch.js testing framework.
    
    ![Nightwatch](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/5xGrRACwJ0wklx3/Screen%20Shot%202015-01-22%20at%204.19.05%20PM.png)

    Nightwatch.js is an automated testing framework that uses Selenium. We created a fork of the Nightwatch.js resource that we use for our builds. View the Mobify fork of Nightwatch.js in the repository [here](https://github.com/mobify/nightwatch). This installation step adds [Custom Nightwatch.js Commands and Assertions](https://cloud.mobify.com/docs/adaptivejs/testing/custom-nightwatch-api/) that were created specifically to test Mobify sites.

8. Enter `y` to lint your JavaScript files.

    ![Lint JS](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/DD9IwuARtzyxoQo/Screen%20Shot%202015-01-22%20at%204.19.44%20PM.png)

    This steps enables your project JavaScript files to be checked against our [code style guide](https://github.com/mobify/mobify-code-style) every time you preview your build. The style errors in your project are reported in the terminal but do not prevent your site preview.

9. Enter `Zepto`.

    ![jQuery or Zepto](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/eytQdVG1wlvW7Ro/Screen%20Shot%202015-01-22%20at%204.20.50%20PM.png)

    We currently use Zepto by default. Zepto provides some of the same functionality that jQuery does but with a smaller file size. Read the [official Zepto documentation](http://zeptojs.com/) for information.

10. Enter the most recent version of Zepto.

    ![Zepto Version](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/pgGyeLJEcpGlkbC/Screen%20Shot%202015-01-22%20at%204.21.34%20PM.png)

    The install concludes and returns the command line to your `workshop--adaptivejs-site` project folder. A new folder **also** named `workshop--adaptivejs-site` is now in your original project folder.
    This means that your project is now located in a path similar to this one:

    ```
    path/to/project/workshop--adaptivejs-site/workshop--adaptivejs-site
    ```
    
    At the end of this tutorial, you change this directory structure to avoid confusion.

11. Change directories into the new `workshop--adaptivejs-site` folder with the command:


    ```
    cd workshop--adaptivejs-site
    ```
    
12. View the contents of the folder with the command:

    ```
    ls -l
    ```

    The folder includes these items:

    ```
    adaptation/
    assets/
    bower_components/
    node_modules/
    tests/
    tasks/
    Gruntfile.js
    package.json
    bower.json
    ```

    The **adaptation** folder contains the router, the view files, and the template files.

    The **assets** folder contains files that are used on the mobile version of the site. This includes the sites SCSS files, images that we add, and JavaScript that runs on the page after its adaptation.

    The **bower_components** folder contains plugins and other JavaScript tools for the adapted site.

    The **node_modules** folder contains the project Node modules.

    The **Gruntfile.js** file defines tasks to run such as building the project, running tests, and uploading bundles to Mobify Cloud.

    The **package.json** file defines your project information such as its name, project slug, and dependencies.

13. Test your installation with a preview. Follow the instructions in the [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project) tutorial.

14. Stop the preview with the command keyboard shortcut `[control] c` on the command line.

15. Change directories back to the first level `workshop--adaptivejs-site`

        cd ../

Test your directory with the command `pwd`. It should look something like:

    path/to/project/workshop--adaptivejs-site
    
We now change the folder structure to eliminate the additional `workshop--adaptivejs-site` folder inside this root folder.

##Ready to Start

1. Enter following command on the command line in Terminal:

    ```
    git reset --hard HEAD && git clean -df 
    ```
    
    This command resets the branch. The end result of this command is that only the first folder is now the location of the project files.
    
2. Enter the following command to checkout the `step1-generate-view` branch of the workshop project.
    
    ```
    git checkout step-1-generate-view
    ```
    
3. Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site-1x/blob/step-1-generate-view/README.md) of the Step 1 branch.

##Additional Information

The generator that we used to create the project also has a default setting, which automatically chooses the same settings that we used above. In the future you can generate projects using the defaults by typing:

```
yo adaptivejs --defaults mobify
```

For more information on options available for the generator, view the [Adaptive.js Generator  README](https://github.com/mobify/generator-adaptivejs).

