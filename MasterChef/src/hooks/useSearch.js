import { useContext } from 'react';
import { AuthContext } from '../Context/context'

export function useSearch() {
  const value = useContext(AuthContext)

  return value;
}