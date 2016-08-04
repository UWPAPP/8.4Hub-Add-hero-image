(function () {
    "use strict";

    //PageControl是HMTL\CSS\JS的一个模块化单元，用作逻辑页
    WinJS.UI.Pages.define("/Pages/home.html", {
        ready: function (element, options) {
            WinJS.Resources.processAll();
        },
        processed: function (element, options) {
            /* your code here */
        },
        myData: {
            get: function () {
                return myData;
            }
        }
    });

    var myData = new WinJS.Binding.List([
        { title: "Fire Hydrant", text: "Red", picture: "/pages/hub/images/circle_list1.jpg" },
        { title: "Fire Hydrant", text: "Yellow", picture: "/pages/hub/images/circle_list2.jpg" },
        { title: "Pothole Cover", text: "Gray", picture: "/pages/hub/images/circle_list3.jpg" },
        { title: "Sprinkler", text: "Yellow", picture: "/pages/hub/images/circle_list4.jpg" },
        { title: "Electrical Charger", text: "Yellow", picture: "/pages/hub/images/circle_list5.jpg" },
        { title: "Knob", text: "Red", picture: "/pages/hub/images/circle_list6.jpg" },
        { title: "Fire Hydrant", text: "Red", picture: "/pages/hub/images/circle_list1.jpg" },
        { title: "Fire Hydrant", text: "Yellow", picture: "/pages/hub/images/circle_list2.jpg" },
        { title: "Pothole Cover", text: "Gray", picture: "/pages/hub/images/circle_list3.jpg" },
        { title: "Fire Hydrant", text: "Red", picture: "/pages/hub/images/circle_list1.jpg" },
        { title: "Fire Hydrant", text: "Yellow", picture: "/pages/hub/images/circle_list2.jpg" },
        { title: "Pothole Cover", text: "Gray", picture: "/pages/hub/images/circle_list3.jpg" }
    ]);



})();