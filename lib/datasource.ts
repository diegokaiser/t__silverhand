export const useMocks = process.env.NEXT_PUBLIC_DATA_SOURCE === 'mock'
export const MOCK_SEED = Number(process.env.NEXT_PUBLIC_MOCK_SEED ?? 42)
export const MOCK_ROWS = Number(process.env.NEXT_PUBLIC_MOCK_ROWS ?? 500)
export const NETWORK_DELAY_MS = Number(process.env.NEXT_PUBLIC_NETWORK_DELAY_MS ?? 400)
