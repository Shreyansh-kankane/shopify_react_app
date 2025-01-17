import React from 'react';
import {useAppBridge} from '@shopify/app-bridge-react';

function App() {
    const shopify = useAppBridge();

    function generateBlogPost() {
        // Handle generating
        shopify.toast.show('Blog post template generated');
      }
    
    return (
        <>
            <button onClick={generateBlogPost}>Generate Blog Post</button>;
            <h1>Hello World 2</h1>;
        </>
    )

}

export default App;
