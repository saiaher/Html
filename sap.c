<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function handleSubmit(event) {
            event.preventDefault();  // Prevents form from submitting immediately

            // You can add some validation here if needed
            // Redirect to another page
            window.location.href = "newpage.html"; // Change this to the page you want to redirect to
        }
    </script>
</head>
<body>
    <form id="loginForm" action="/login" method="post" onsubmit="handleSubmit(event)">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br><br>
        
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>
        
        <input type="submit" value="Login">
    </form>
</body>
</html>