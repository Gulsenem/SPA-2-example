const app = new Vue 
(
    {
        el: "#app",
        data:
        {
           text_titel: "Welche Immobilie möchten Sie bewerten?" 
        }

    }
)

let aktuell = 1;
function nav(n)
{
    aktuell=aktuell+n;
    if(aktuell==2)
    {
        app.text_titel = "Wie groß ist die Fläche Ihrer Immobilie?";
    }
}

