import studentView from "./pages/studentView/studentView.html"
import teacherView from "./pages/teacherView/teacherView.html"
import backendUI from "./pages/backendUI/backendUI.html"
import {Service} from "./backend/service.ts"

console.log("Hello via Bun!");

const service = new Service();

const server = Bun.serve({
    routes: {
        "/studentView" : studentView,
        "/teacherView" : teacherView,
        "/backendUI" : backendUI,

        // Bei Zugriff auf Hauptseite automatisch auf Schülersicht
        "/" : Response.redirect("studentView"),

        // API

        "/api/config/:view" : req => {
            return Response.json(`Test_Test_Example, view: ${req.params.view}`, {status: 200});
        },

        "/api/data" : request => {
            return Response.json("Test_Test_Data");
        }


    }
})

console.log(`Running on ${server.url}`)
console.log(`Teacher view on ${server.url}teacherView`)
console.log(`Student view on ${server.url}studentView`)
console.log(`Backend view on ${server.url}backendUI`)