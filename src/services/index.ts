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
    const result = await response.json()
    return result;
  } catch (error) {
    console.error('The error: ', error);
    return new Error(`The Error: ${error}`);
  }
};


export const getBackgroundImage = async () => {
    try {
        const response = await fetch('https://api.unsplash.com/', {

        });
        console.log('🚀 -----------------------');
        console.log('🚀 ~ response', response);
        console.log('🚀 -----------------------');
    } catch (error) {
        console.error('getBackgroundImage error: ', error)
        return new Error('getBackground  error')
    }
}


export const getAuthToken = async () => {
        const auth = await fetch('https://unsplash.com/oauth/authorize', {
            client_id: process.env.API_KEY,
            redirect_uri: '',
            response_type: '',
        });

}