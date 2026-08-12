// Minimal React entry point for Cloudflare Pages

// We'll just create a simple static HTML that shows our app is ready
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DisasterWatch - FEMA Disaster Alert Tool</title>
    <meta name="description" content="Know the moment FEMA declares a disaster in your area">
    <link rel="canonical" href="https://disasterwatch.example.com/">
</head>
<body>
    <h1>DisasterWatch Application</h1>
    <p>Ready for deployment with Cloudflare Pages</p>
    <p>This is a static build of the DisasterWatch application</p>
</body>
</html>
`;

// In a real app, this would be your React root component
console.log("DisasterWatch app initialized");