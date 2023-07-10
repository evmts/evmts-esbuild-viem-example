import { createPublicClient, http } from 'viem'
import { mainnet, optimismGoerli } from 'viem/chains'

import { ExampleContract } from './ExampleContract.sol'

export const publicClients = {
  1: createPublicClient({
    chain: mainnet,
    transport: http(mainnet.rpcUrls.public.http[0]),
  }),
  420: createPublicClient({
    chain: optimismGoerli,
    transport: http(optimismGoerli.rpcUrls.public.http[0]),
  }),
}


export const ownerOf = (tokenId = BigInt(1), chainId: keyof typeof publicClients = 1) => {
  return publicClients[chainId].readContract(
    ExampleContract.read({ chainId: chainId }).ownerOf(tokenId),
  )
}

