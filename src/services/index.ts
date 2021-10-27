export const getManateeJoke = async () => {
  try {
    const response = await fetch(
      'https://manatee-jokes.p.rapidapi.com/manatees/random',
      {
        headers: {
          'x-rapidapi-host': 'manatee-jokes.p.rapidapi.com',
          'x-rapidapi-key':
            'fe3eaf7da9msh1f77fbf700ef42bp1c59c1jsnddae3d5515d2',
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('The error: ', error);
    return new Error(`The Error: ${error}`);
  }
};
