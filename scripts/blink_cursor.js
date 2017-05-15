setInterval(function()
            {
                if(document.getElementById("cursor").style.visibility == "hidden")
                {
	                document.getElementById("cursor").style.visibility = "visible";
                }
                else
                {
	                document.getElementById("cursor").style.visibility = "hidden";
                }
            }, 500);
