import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph.mdex.com/subgraphs/name/mdex/swap',
    // uri: 'https://hg1.bitcv.net/subgraphs/name/mdex/hecoswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})
export const transclient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://hg1.bitcv.net/subgraphs/name/mdex/hecoswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})
export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://health.mdex.com/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'http://hg1.bitcv.net/subgraphs/name/mdex-heco-blocks',
    uri: 'https://graph.mdex.com/subgraphs/name/mdex-heco-blocks',
  }),
  cache: new InMemoryCache(),
})