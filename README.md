To set up a development environment and create Gutenberg blocks in WordPress, follow these steps:

### 1. **Set Up Local Development Environment**

Since you're using XAMPP on Linux, ensure your environment is ready:

1. **Install Node.js and npm**:
   - WordPress development requires Node.js and npm to build Gutenberg blocks.
   - Install them using the following command:
     ```bash
     sudo apt install nodejs npm
     ```

2. **Set Up WordPress**:
   - Make sure you have a WordPress installation running locally on XAMPP. Place your WordPress files in the `htdocs` folder and start Apache/MySQL services via XAMPP.

### 2. **Create a Plugin for Gutenberg Blocks**

1. **Create a Plugin Folder**:
   - Navigate to the `wp-content/plugins` directory in your WordPress installation.
   - Create a new folder for your plugin, e.g., `my-gutenberg-blocks`.

2. **Create the Main Plugin File**:
   - Inside the new folder, create a file named `my-gutenberg-blocks.php` and add the following code to register your plugin:
     ```php
     <?php
     /*
      Plugin Name: My Gutenberg Blocks
      Description: Custom Gutenberg blocks.
      Version: 1.0
      Author: Your Name
     */

     function mg_blocks_register_block() {
         // Enqueue block editor assets (JavaScript)
         wp_enqueue_script(
             'mg-blocks-editor-script',
             plugins_url('build/index.js', __FILE__),
             array('wp-blocks', 'wp-element', 'wp-editor'),
             filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
         );

         // Enqueue block styles for frontend
         wp_enqueue_style(
             'mg-blocks-style',
             plugins_url('build/style-index.css', __FILE__),
             array(),
             filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
         );
     }
     add_action('enqueue_block_editor_assets', 'mg_blocks_register_block');
     ```

### 3. **Set Up Your Block Development Environment**

1. **Install WordPress Scripts**:
   - Navigate to your plugin directory and initialize your project with npm:
     ```bash
     npm init -y
     ```
   - Install the required WordPress block development scripts:
     ```bash
     npm install @wordpress/scripts --save-dev
     ```

2. **Create Block Files**:
   - Inside your plugin folder, create the following structure:
     ```
     my-gutenberg-blocks/
     ├── src/
     │   └── index.js
     ├── build/
     │   ├── index.js
     │   └── style-index.css
     ├── my-gutenberg-blocks.php
     ├── package.json
     └── webpack.config.js
     ```

   - In the `src/index.js` file, add your block registration code:
     ```js
     import { registerBlockType } from '@wordpress/blocks';
     import { RichText } from '@wordpress/block-editor';

     registerBlockType('mg/block-example', {
         title: 'Example Block',
         icon: 'smiley',
         category: 'design',
         attributes: {
             content: {
                 type: 'string',
                 source: 'html',
                 selector: 'p',
             },
         },
         edit({ attributes, setAttributes }) {
             return (
                 <RichText
                     tagName="p"
                     value={attributes.content}
                     onChange={(content) => setAttributes({ content })}
                 />
             );
         },
         save({ attributes }) {
             return <RichText.Content tagName="p" value={attributes.content} />;
         },
     });
     ```

### 4. **Build Your Block**

1. **Build the Block**:
   - Add the following to your `package.json` under `scripts`:
     ```json
     "scripts": {
       "build": "wp-scripts build",
       "start": "wp-scripts start"
     }
     ```
   - Run the build process:
     ```bash
     npm run build
     ```

2. **Test Your Block**:
   - Activate your plugin in the WordPress dashboard.
   - Go to the Gutenberg editor and search for "Example Block" to see it in action.

### 5. **Develop and Customize Your Blocks**

You can continue to customize and develop your blocks by modifying the `src/index.js` file, adding custom attributes, styles, and settings.

### References:
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)


To set up a development environment and create Gutenberg blocks in WordPress, follow these steps:

### 1. **Set Up Local Development Environment**

Since you're using XAMPP on Linux, ensure your environment is ready:

1. **Install Node.js and npm**:
   - WordPress development requires Node.js and npm to build Gutenberg blocks.
   - Install them using the following command:
     ```bash
     sudo apt install nodejs npm
     ```

2. **Set Up WordPress**:
   - Make sure you have a WordPress installation running locally on XAMPP. Place your WordPress files in the `htdocs` folder and start Apache/MySQL services via XAMPP.

### 2. **Create a Plugin for Gutenberg Blocks**

1. **Create a Plugin Folder**:
   - Navigate to the `wp-content/plugins` directory in your WordPress installation.
   - Create a new folder for your plugin, e.g., `my-gutenberg-blocks`.

2. **Create the Main Plugin File**:
   - Inside the new folder, create a file named `my-gutenberg-blocks.php` and add the following code to register your plugin:
     ```php
     <?php
     /*
      Plugin Name: My Gutenberg Blocks
      Description: Custom Gutenberg blocks.
      Version: 1.0
      Author: Your Name
     */

     function mg_blocks_register_block() {
         // Enqueue block editor assets (JavaScript)
         wp_enqueue_script(
             'mg-blocks-editor-script',
             plugins_url('build/index.js', __FILE__),
             array('wp-blocks', 'wp-element', 'wp-editor'),
             filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
         );

         // Enqueue block styles for frontend
         wp_enqueue_style(
             'mg-blocks-style',
             plugins_url('build/style-index.css', __FILE__),
             array(),
             filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
         );
     }
     add_action('enqueue_block_editor_assets', 'mg_blocks_register_block');
     ```

### 3. **Set Up Your Block Development Environment**

1. **Install WordPress Scripts**:
   - Navigate to your plugin directory and initialize your project with npm:
     ```bash
     npm init -y
     ```
   - Install the required WordPress block development scripts:
     ```bash
     npm install @wordpress/scripts --save-dev
     ```

2. **Create Block Files**:
   - Inside your plugin folder, create the following structure:
     ```
     my-gutenberg-blocks/
     ├── src/
     │   └── index.js
     ├── build/
     │   ├── index.js
     │   └── style-index.css
     ├── my-gutenberg-blocks.php
     ├── package.json
     └── webpack.config.js
     ```

   - In the `src/index.js` file, add your block registration code:
     ```js
     import { registerBlockType } from '@wordpress/blocks';
     import { RichText } from '@wordpress/block-editor';

     registerBlockType('mg/block-example', {
         title: 'Example Block',
         icon: 'smiley',
         category: 'design',
         attributes: {
             content: {
                 type: 'string',
                 source: 'html',
                 selector: 'p',
             },
         },
         edit({ attributes, setAttributes }) {
             return (
                 <RichText
                     tagName="p"
                     value={attributes.content}
                     onChange={(content) => setAttributes({ content })}
                 />
             );
         },
         save({ attributes }) {
             return <RichText.Content tagName="p" value={attributes.content} />;
         },
     });
     ```

### 4. **Build Your Block**

1. **Build the Block**:
   - Add the following to your `package.json` under `scripts`:
     ```json
     "scripts": {
       "build": "wp-scripts build",
       "start": "wp-scripts start"
     }
     ```
   - Run the build process:
     ```bash
     npm run build
     ```

2. **Test Your Block**:
   - Activate your plugin in the WordPress dashboard.
   - Go to the Gutenberg editor and search for "Example Block" to see it in action.

### 5. **Develop and Customize Your Blocks**

You can continue to customize and develop your blocks by modifying the `src/index.js` file, adding custom attributes, styles, and settings.

### References:
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
