import Feed from "@components/Feed";

const Home = () => (
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Create
      <br />
      <span className='blue_gradient text-center'> Discover</span>
      <span className='orange_gradient text-center'> & Share</span>
    </h1>
    <p className='desc text-center'>
      <span className='blue_gradient text-center'> PromptFriends is more than just an app</span>
      <span className='orange_gradient text-center'> it's a community focused on the creation, discovery, and sharing of prompt ideas for AI platforms</span>
      <span className='blue_gradient text-center'> like ChatGPT, Auto-GPT, Bing, Midjourney, Leonardo AI and More!</span>
      <br />
      <br />
      <span className='orange_gradient text-center'> Create your own prompts,</span> 
      <span className='blue_gradient text-center'> Discover others creations</span> 
      <span className='orange_gradient text-center'> and then Share your creations</span>
      <span className='blue_gradient text-center'> with your PromptFriends  and your friends around the world! </span>
      <br />
      <br />
      <span className='orange_gradient text-center'> With PromptFriends on your side</span>
      <br />
      <span className='blue_gradient text-center'> the possibilities are endless.</span>
      <br />
      <br />
      <span className='orange_gradient text-center'> 
        <a 
          href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=114733515182-avrv5c8bk0imdbddcsi8kifpmapdp5d4.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=UUt_a5dLVwcmhuAohElse26gh94rYSZLpmu7CNK0w94&code_challenge=DsiEe-BDIHZx0mOoZND428ScDa0shyTvbsYpnrFzuH4&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow" 
          target="_blank" 
          rel="noopener noreferrer"
          className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-700"
        >
          Sign In Today!
        </a>
      </span>
      <br />
      <br />
      <span className='blue_gradient text-center'> It is 100% Free</span>
      <br />
      <span className='orange_gradient text-center'> PromptFriends: Powered by Cutting Edge Technology!</span> 
      <br />
    <span className='blue_gradient text-center'> Next.js 13+React+Tailwind+MongoDB+Google Oauth</span> 
    <br />
    <span className='orange_gradient text-center'> It's a full-stack C.R.U.D monster that never sleeps!</span>
    </p>
    <Feed />
  </section>
);

export default Home;
