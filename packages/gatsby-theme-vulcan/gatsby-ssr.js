const React = require("react")

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {

    if (pluginOptions.snipcart_api_key && pluginOptions.version === 'v2') {
        setHeadComponents([
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />,
        ]);
        setPostBodyComponents([
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>,
            <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key={pluginOptions.snipcart_api_key}></script>
        ]);
    }

    if (pluginOptions.snipcart_api_key && pluginOptions.version === 'v3') {
        setHeadComponents([
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css" />,
        ]);
        setPostBodyComponents([
            <div hidden id="snipcart" data-api-key={pluginOptions.snipcart_api_key}></div>,
            <script src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js"></script>,
        ]);
    }
    
}