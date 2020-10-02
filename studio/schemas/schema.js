// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import home from "./home";
import cafe from "./cafe";
import findUs from "./findus";
import catering from "./catering";
import eventpage from "./eventpage";
import addevents from "./addevents";
import about from "./about";
import rent from "./rent";
import footer from "./footer";
import navigation from "./navigation";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    cafe,
    findUs,
    catering,
    eventpage,
    addevents,
    about,
    rent,
    footer,
    navigation,
  ]),
});
