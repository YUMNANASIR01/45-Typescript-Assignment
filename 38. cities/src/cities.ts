function describe_city (city : string, country : string = `Default Country.`){
    console.log(`${city} is in ${country}`);

}
describe_city(`karachi`,`Pakistan`);
describe_city(`Dehli`,`India`);
describe_city(`China`);