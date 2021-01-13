const app = Vue.createApp({
    data() {
        return {
            brews: [],
            currentBrew: {},
            beans: [
                {name: "CALAHUTE ALTO", company: "Nordhavn Coffee", description: "Very smooth with a full and round body accompanied by notes of dried fruit and ripe banana, rounded by a mild acidity reminiscent of tart fruit.", process: "Washed", roastProfile: "Medium", varieties: "Castilo, Caturra", country: "Guatemala"}, 
                {name: "BEZA", company: "Impact Roasters", description: "Strong, rich taste combined with a deep spicy, citrus and floral aroma.", process: "Sun dried", roastProfile: "Medium", varieties: "Castilo, Caturra", country: "Ethiopia"},
                {name: "VISTA HERMOSA", company: "Coffee Collective", description: "Clean and balanced coffee with an elegant acidity. Aromas of pecan nuts, nougat and orange blossom", process: "Washed", roastProfile: "Medium", varieties: "Caturra, Pache", country: "Guatemala"},
                {name: "TAKESI GEISHA", company: "Coffee Collective", description: "Super intense and complex aroma. Clean, honey-sweet with a delicate acidity. Lychee, jasmine and bergamot", process: "Washed", roastProfile: "Medium", varieties: "Geisha", country: "Bolivia"},
            ],
            recipes: [
                {name: "AeroPress", beans: "16g", water: "230ml", grind: "Medium", time: "1min", icon: "#aeropress", guide: {step1: "Add ground coffee to French Press", step2: "Start timer and pour water over coffee", step3: "Stir with a spoon", step4: "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom", step5: "Remove big particles and foam still floating on top", step6: "Let coffee sit for 30 sec. Then gently press down the handle"}},
                {name: "French Press", beans: "33g", water: "500ml", grind: "Coarse", time: "4min", icon: "#french", guide: {step1: "Add ground coffee to French Press", step2: "Start timer and pour water over coffee", step3: "Stir with a spoon", step4: "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom", step5: "Remove big particles and foam still floating on top", step6: "Let coffee sit for 30 sec. Then gently press down the handle"}},
                {name: "Kalita Wave", beans: "16g", water: "230ml", grind: "Medium", time: "1min", icon: "#kalita", guide: {step1: "Add ground coffee to French Press", step2: "Start timer and pour water over coffee", step3: "Stir with a spoon", step4: "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom", step5: "Remove big particles and foam still floating on top", step6: "Let coffee sit for 30 sec. Then gently press down the handle"}},
                {name: "Cold infusion", beans: "40g", water: "200ml", grind: "Coarse", time: "2timer", icon: "#infusion", guide: {step1: "Add ground coffee to French Press", step2: "Start timer and pour water over coffee", step3: "Stir with a spoon", step4: "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom", step5: "Remove big particles and foam still floating on top", step6: "Let coffee sit for 30 sec. Then gently press down the handle"}},
                {name: "Chemex", beans: "16g", water: "230ml", grind: "Fine", time: "3min", icon: "#chemex", guide: {step1: "Add ground coffee to French Press", step2: "Start timer and pour water over coffee", step3: "Stir with a spoon", step4: "After 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom", step5: "Remove big particles and foam still floating on top", step6: "Let coffee sit for 30 sec. Then gently press down the handle"}}
            ],
            
            page: 1,
            favoriteRecipe: 0,
        };
    },

    methods: {
        pageSelector(page) {
            this.page = page
        },

        selectBean(index) {
            this.currentBrew.name = this.beans[index].name;
            this.currentBrew.company = this.beans[index].company;
            this.pageSelector(3);
        },

        selectRecipe(index) {
            this.currentBrew.icon = this.recipes[index].icon;
            this.currentBrew.beans = this.recipes[index].beans;
            this.currentBrew.water = this.recipes[index].water;
            this.currentBrew.grind = this.recipes[index].grind;
            this.currentBrew.time = this.recipes[index].time;
            this.currentBrew.brew = this.recipes[index].name;
            this.currentBrew.guide = this.recipes[index].guide;
            this.pageSelector(4);
        },

        saveCurrentBrew() {
            this.currentBrew.id = Date.parse(new Date);

            this.brews.unshift(Object.assign({}, this.currentBrew));

            localStorage.setItem("brewistaBrews", JSON.stringify(this.brews));

            this.pageSelector(1);
        },


        test(num) {
            console.log(num)
        },
    },

    mounted() {
        if (localStorage.getItem("brewistaBrews") != null) {
            this.brews = JSON.parse(localStorage.getItem("brewistaBrews"));
        }
    },
});

app.mount("#app")