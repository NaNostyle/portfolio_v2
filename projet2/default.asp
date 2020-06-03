<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "arnaudlarrieu.fr" or host = "www.arnaudlarrieu.fr" then response.redirect("https://www.arnaudlarrieu.fr/")

else
response.redirect("https://www.arnaudlarrieu.fr/error.htm")
end if
%>