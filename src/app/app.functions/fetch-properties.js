const hubspot = require('@hubspot/api-client');

exports.main = async (context) => {
  const {onsite_location, total_cost} = context.propertiesToSend;

  // More logic can go here to use the hubspot api client to
  // fetch other objects based on the CRM object properties

  return {address: onsite_location, cost: total_cost};
};
