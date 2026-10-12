import { useMutation } from '@/hooks/useMutation'
import type { Account } from 'cobrowse-agent-sdk'

export function useUpdateAccount(account: Account) {
  // eslint-disable-next-line @typescript-eslint/unbound-method -- update is bound in RESTResource's constructor which is not visible to the type system
  return useMutation(account.update)
}
