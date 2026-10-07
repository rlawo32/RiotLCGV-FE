'use client'

import { useId } from 'react'

type Rank = 1 | 2 | 3

const palettes = {
  1: {
    light: '#FFF0B0',
    metal: '#D6A344',
    dark: '#785421',
    edge: '#E6BC60',
    faceTop: '#49391F',
    faceMiddle: '#29231B',
    faceBottom: '#40321D',
    numberTop: '#FFF4C5',
    numberBottom: '#D9AA4D',
  },
  2: {
    light: '#E2EEFF',
    metal: '#8DA8CE',
    dark: '#3F536E',
    edge: '#93AFD6',
    faceTop: '#253650',
    faceMiddle: '#151D2C',
    faceBottom: '#223047',
    numberTop: '#F0F6FF',
    numberBottom: '#9BB8E0',
  },
  3: {
    light: '#F1C4A0',
    metal: '#B78362',
    dark: '#634334',
    edge: '#C5906D',
    faceTop: '#443029',
    faceMiddle: '#211A1C',
    faceBottom: '#382720',
    numberTop: '#FFE0BD',
    numberBottom: '#C08D67',
  },
} as const

const PowerRankIcon = ({ rank }: { rank: Rank }) => {
  const id = useId()
  const colors = palettes[rank]

  const metalId = `${id}-metal`
  const faceId = `${id}-face`
  const numberId = `${id}-number`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="90"
      viewBox="0 0 128 128"
      fill="none"
      role="img"
      aria-label={`${rank}등`}
    >
      <defs>
        <linearGradient
          id={metalId}
          x1="35"
          y1="25"
          x2="92"
          y2="108"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.light} />
          <stop offset=".3" stopColor={colors.metal} />
          <stop offset=".55" stopColor={colors.dark} />
          <stop offset=".78" stopColor={colors.metal} />
          <stop offset="1" stopColor={colors.light} />
        </linearGradient>

        <linearGradient
          id={faceId}
          x1="40"
          y1="38"
          x2="88"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.faceTop} />
          <stop offset=".5" stopColor={colors.faceMiddle} />
          <stop offset="1" stopColor={colors.faceBottom} />
        </linearGradient>

        <linearGradient
          id={numberId}
          x1="64"
          y1="48"
          x2="64"
          y2="86"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.numberTop} />
          <stop offset="1" stopColor={colors.numberBottom} />
        </linearGradient>
      </defs>

      <g transform="scale(1 0.96875)">
        <g strokeLinejoin="round">
          {/* 측면 장식 */}
          <path
            d="M37 49 17 34 20 51 27 60 23 58 26 72 35 83 39 78Z
               M91 49 111 34 108 51 101 60 105 58 102 72 93 83 89 78Z"
            fill={`url(#${metalId})`}
            stroke={colors.dark}
            strokeWidth="1.5"
          />

          <path
            d="M20 39 29 48 32 63 26 55Z
               M108 39 99 48 96 63 102 55Z"
            fill={colors.light}
            fillOpacity=".7"
          />

          <path
            d="m27 64 6 6 3 10 m65-16-6 6-3 10"
            stroke={colors.light}
            strokeWidth="1.2"
          />

          {/* 1등 왕관 */}
          {rank === 1 && (
            <>
              <path
                d="m51 36-4-9 10 4 7-9 6 9 11-4-4 9Z"
                fill={`url(#${metalId})`}
                stroke={colors.dark}
                strokeWidth="1.2"
              />

              <path
                d="m64 7 3 8 6 3-6 3-3 8-3-8-6-3 6-3Z"
                fill={`url(#${metalId})`}
                stroke={colors.edge}
              />
            </>
          )}

          {/* 방패 */}
          <path
            d="m64 29 12 6 21 6-2 48q-13 12-31 20-18-8-31-20l-2-48 21-6Z"
            fill={`url(#${metalId})`}
            stroke={colors.dark}
            strokeWidth="2"
          />

          <path
            d="m64 34 12 6 16 5-2 41q-12 11-26 17-14-6-26-17l-2-41 16-5Z"
            fill={`url(#${faceId})`}
            stroke={colors.edge}
            strokeWidth="1.4"
          />

          <path
            d="m64 38 12 6 12 4-2 36q-9 9-22 15-13-6-22-15l-2-36 12-4Z"
            stroke={colors.light}
            strokeOpacity=".18"
          />

          <path
            d="m33 43 2 45 29 19"
            stroke={colors.light}
            strokeOpacity=".75"
          />

          <path
            d="m95 43-2 45-29 19"
            stroke={colors.dark}
          />

          <path
            d="m39 47 12-4 m26 0 12 4"
            stroke={colors.light}
            strokeOpacity=".65"
          />
        </g>

        {/* 숫자는 압축하지 않고 중앙 위치만 맞춤 */}
        <text
          x="64"
          y="82.34375"
          transform="scale(1 1.0322580645)"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="42"
          fontWeight="700"
          fontStyle="normal"
          fill={`url(#${numberId})`}
        >
          {rank}
        </text>
      </g>
    </svg>
  )
}

export const PowerRank1Icon = () => <PowerRankIcon rank={1} />

export const PowerRank2Icon = () => <PowerRankIcon rank={2} />

export const PowerRank3Icon = () => <PowerRankIcon rank={3} />

export default PowerRank1Icon