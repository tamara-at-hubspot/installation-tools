const hubspot = require('@hubspot/api-client');

exports.main = async (context) => {
  const {hs_object_id} = context.propertiesToSend;
  const {name, value} = context.parameters;

  const hubspotClient = new hubspot.Client({ accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN'] });
  const input = { properties: { [name]: value }};

  const response = await hubspotClient.crm.objects.basicApi.update('p_installs', hs_object_id, input);
  console.log(response);

  return;
};
