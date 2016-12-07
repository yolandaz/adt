import tweepy

#following four keys required in order to access the twitter API. Unique to every user
CONSUMER_KEY = 'R9kuLNNNpUrRGCBNgp0fGDBIV'
CONSUMER_SECRET = 'J77eGEYrufS9ByAv3asL2U41O0HLixtyFdRP80xx3YdJ8rN4Q3'
ACCESS_KEY = '2975909321-tqXwfzaEkp2p1vGPDJIn3vrDueor5wGSiHJnrmp'
ACCESS_SECRET = '4VL9xgKmOeKTSrBqZ3y9c4cpOb3XRp6npT5gvXntva07k'

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)

api = tweepy.API(auth)

api.update_profile_image('profile.jpg')

#takes the first search result
first_result = api.search("Massachusetts Institute of Technology")[0]

#follows user of that tweet
api.create_friendship(first_result.user.screen_name)

api.update_status("Hello World!!!!!!!!")
