"use sctipt"

var token = localStorage.getItem('token');

if(token != null)
{
    document.location.href = "/pages/store_pages.html"
}