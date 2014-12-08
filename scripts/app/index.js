define(["jquery", "app/messages"],function ($, messages) {



    $(document).ready(function(){

        console.log("inside define");

        var data = [
            {
                id: 1,
                question: "Do you currently live in DC?",
                answers: [{id: 1, text: "Yes"}, {id: 2, text: "No"}]
            },
            {
                id: 2,
                question: "Are you over the age of 18?",
                answers: [{id: 3, text: "Yes"}, {id: 4, text: "No"}]
            },
            {
                id: 3,
                question: "Are you currently pending charges?",
                answers: [{id: 5, text: "Yes"}, {id: 6, text: "No"}]
            }
        ];

        console.log(data[0].question);

    });
});