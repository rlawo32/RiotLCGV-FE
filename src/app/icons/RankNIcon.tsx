import type { SVGProps } from 'react';

type Props = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
    rank: number;
    label?: string;
    size?: number;
    compact?: boolean;
    idPrefix?: string;
};

const FULL = [36, 70, 248, 212];
const COMPACT = [36, 70, 248, 170];

/** 1 -> 1ST, 2 -> 2ND, 11 -> 11TH, 22 -> 22ND ... */
const ordinal = (n: number) => {
    const suffix = ['TH', 'ST', 'ND', 'RD'];
    const v = n % 100;
    return `${n}${suffix[(v - 20) % 10] ?? suffix[v] ?? suffix[0]}`;
};

const RankNIcon = ({ rank, label, size = 48, compact = false, idPrefix = 'rankn', ...props }: Props) => {
    const uid = idPrefix;
    const box = compact ? COMPACT : FULL;
    const text = (label ?? ordinal(rank)).toUpperCase();
    const labelSize = text.length > 4 ? 29 : 34;
    const digits = String(rank).length;
    const numSize = digits <= 1 ? 96 : digits === 2 ? 74 : 54;
    const ariaLabel = `Rank badge ${text}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={box.join(' ')}
            width={size}
            height={Math.round((size * box[3]) / box[2])}
            role="img"
            aria-label={ariaLabel}
            {...props}
        >
            <defs>
                <linearGradient id={`${uid}-metal`} x1=".12" y1="0" x2=".88" y2="1">
                    <stop offset="0" stopColor="#FBFCFF"/>
                    <stop offset=".3" stopColor="#C9D0E8"/>
                    <stop offset=".52" stopColor="#767FA6"/>
                    <stop offset=".72" stopColor="#C9D0E8"/>
                    <stop offset="1" stopColor="#474E70"/>
                </linearGradient>
                <linearGradient id={`${uid}-leaf`} x1="0" y1="1" x2=".85" y2="0">
                    <stop offset="0" stopColor="#474E70"/>
                    <stop offset=".38" stopColor="#767FA6"/>
                    <stop offset=".74" stopColor="#C9D0E8"/>
                    <stop offset="1" stopColor="#FBFCFF"/>
                </linearGradient>
                <linearGradient id={`${uid}-ring`} x1="0" y1="0" x2=".6" y2="1">
                    <stop offset="0" stopColor="#FBFCFF"/>
                    <stop offset=".22" stopColor="#C9D0E8"/>
                    <stop offset=".5" stopColor="#474E70"/>
                    <stop offset=".78" stopColor="#C9D0E8"/>
                    <stop offset="1" stopColor="#FBFCFF"/>
                </linearGradient>
                <radialGradient id={`${uid}-disc`} cx=".5" cy=".38" r=".72">
                    <stop offset="0" stopColor="#232845"/>
                    <stop offset="1" stopColor="#0B0E1C"/>
                </radialGradient>
                <linearGradient id={`${uid}-ribbon`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#4A5280"/>
                    <stop offset=".55" stopColor="#232845"/>
                    <stop offset="1" stopColor="#171B30"/>
                </linearGradient>
                <linearGradient id={`${uid}-gem`} x1=".2" y1="0" x2=".8" y2="1">
                    <stop offset="0" stopColor="#E7E4FF"/>
                    <stop offset=".45" stopColor="#9E8CFF"/>
                    <stop offset="1" stopColor="#5B44C7"/>
                </linearGradient>
                <linearGradient id={`${uid}-num`} x1=".1" y1="0" x2=".7" y2="1">
                    <stop offset="0" stopColor="#FBFCFF"/>
                    <stop offset=".45" stopColor="#C9D0E8"/>
                    <stop offset="1" stopColor="#767FA6"/>
                </linearGradient>
                <radialGradient id={`${uid}-glow`} cx=".5" cy=".5" r=".5">
                    <stop offset="0" stopColor="#8B93FF" stopOpacity=".5"/>
                    <stop offset=".55" stopColor="#8B93FF" stopOpacity=".16"/>
                    <stop offset="1" stopColor="#8B93FF" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id={`${uid}-sheen`} cx=".35" cy=".22" r=".55">
                    <stop offset="0" stopColor="#fff" stopOpacity=".34"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </radialGradient>
                <filter id={`${uid}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity=".45"/>
                </filter>
            </defs>
            <g id={`${uid}-badge`}>
                <ellipse cx="160" cy={box[1] + box[3] / 2} rx={box[2] / 2} ry={box[3] / 2} fill={`url(#${uid}-glow)`}/>
                <g filter={`url(#${uid}-shadow)`}>
                    <g className="rb-wreath">
                        <g transform="translate(200.6 212.7) rotate(50.0) scale(1.160 1.160)">
                            <path d="M0 0C13 -16 17 -38 8 -55C5 -62 2 -66 0 -72C-3 -62 -12 -40 -8 -17C-6 -8 -3 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#565E80" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FBFCFF" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(224.3 200.5) rotate(38.7) scale(1.238 1.238)">
                            <path d="M0 0C13 -16 17 -38 8 -55C5 -62 2 -66 0 -72C-3 -62 -12 -40 -8 -17C-6 -8 -3 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#565E80" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FBFCFF" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(234.3 175.0) rotate(27.3) scale(1.203 1.203)">
                            <path d="M0 0C13 -16 17 -38 8 -55C5 -62 2 -66 0 -72C-3 -62 -12 -40 -8 -17C-6 -8 -3 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#565E80" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FBFCFF" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(225.6 148.5) rotate(16.0) scale(1.075 1.075)">
                            <path d="M0 0C13 -16 17 -38 8 -55C5 -62 2 -66 0 -72C-3 -62 -12 -40 -8 -17C-6 -8 -3 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#565E80" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FBFCFF" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(119.4 212.7) rotate(-50.0) scale(-1.160 1.160)">
                            <path d="M0 0C13 -16 17 -38 8 -55C5 -62 2 -66 0 -72C-3 -62 -12 -40 -8 -17C-6 -8 -3 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#565E80" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FBFCFF" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(95.7 200.5) rotate(-38.7) scale(-1.238 1.238)">
                            <path d="M0 0C13 -16 17 -38 8 -55C5 -62 2 -66 0 -72C-3 -62 -12 -40 -8 -17C-6 -8 -3 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#565E80" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FBFCFF" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(85.7 175.0) rotate(-27.3) scale(-1.203 1.203)">
                            <path d="M0 0C13 -16 17 -38 8 -55C5 -62 2 -66 0 -72C-3 -62 -12 -40 -8 -17C-6 -8 -3 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#565E80" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FBFCFF" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(94.4 148.5) rotate(-16.0) scale(-1.075 1.075)">
                            <path d="M0 0C13 -16 17 -38 8 -55C5 -62 2 -66 0 -72C-3 -62 -12 -40 -8 -17C-6 -8 -3 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#565E80" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FBFCFF" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                    </g>
                    <g className="rb-medal">
                        <circle cx="160" cy="156" r="80" fill={`url(#${uid}-ring)`} stroke="#565E80" strokeWidth="2.5"/>
                        <circle cx="160" cy="156" r="70" fill={`url(#${uid}-metal)`} opacity=".9"/>
                        <circle cx="160" cy="156" r="63" fill={`url(#${uid}-disc)`} stroke="#565E80" strokeWidth="3"/>
                        <circle cx="160" cy="156" r="63" fill={`url(#${uid}-sheen)`}/>
                        <path d="M104 128A63 63 0 0 1 178 96" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round"/>
                        {compact ? (
                            <>
                                <text className="rb-num-shadow" x="160" y="157" textAnchor="middle" dominantBaseline="central" fontFamily="'Arial Black','Helvetica Neue',Arial,sans-serif" fontWeight="900" fontSize={numSize} fill="#000" fillOpacity=".45">{rank}</text>
                                <text className="rb-num" x="160" y="153" textAnchor="middle" dominantBaseline="central" fontFamily="'Arial Black','Helvetica Neue',Arial,sans-serif" fontWeight="900" fontSize={numSize} fill={`url(#${uid}-num)`} stroke="#565E80" strokeWidth="1.6" paintOrder="stroke">{rank}</text>
                            </>
                            ) : (
                                <>
                                    <path d="M160 104C167 138 178 149 212 156C178 163 167 174 160 208C153 174 142 163 108 156C142 149 153 138 160 104Z" fill={`url(#${uid}-metal)`} stroke="#565E80" strokeWidth="2" strokeLinejoin="round"/>
                                    <path d="M160 104L160 208M108 156L212 156" stroke="#FBFCFF" strokeWidth="1.4" strokeOpacity=".45"/>
                                </>
                            )}
                        </g>
                        {!compact && (
                            <g className="rb-ribbon" transform="translate(0 -26)">
                                <path d="M66 238L34 246L48 272L34 300L66 292Z" fill={`url(#${uid}-ribbon)`} stroke="#171B30" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M254 238L286 246L272 272L286 300L254 292Z" fill={`url(#${uid}-ribbon)`} stroke="#171B30" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M66 234Q160 246 254 234L254 298Q160 310 66 298Z" fill={`url(#${uid}-ribbon)`} stroke="#171B30" strokeWidth="2.4" strokeLinejoin="round"/>
                                <path d="M66 234Q160 246 254 234L254 250Q160 262 66 250Z" fill="#fff" fillOpacity=".14"/>
                                <path d="M72 240Q160 252 248 240" fill="none" stroke="#C9D0E8" strokeWidth="1.6" strokeOpacity=".55"/>
                                <path d="M72 294Q160 306 248 294" fill="none" stroke="#C9D0E8" strokeWidth="1.6" strokeOpacity=".45"/>
                                <text x="160" y="274" textAnchor="middle" dominantBaseline="central" fontFamily="'Arial Black','Helvetica Neue',Arial,sans-serif" fontWeight="900" fontSize={labelSize} letterSpacing="2.5" fill="#000" fillOpacity=".45">{text}</text>
                                <text className="rb-label" x="160" y="272" textAnchor="middle" dominantBaseline="central" fontFamily="'Arial Black','Helvetica Neue',Arial,sans-serif" fontWeight="900" fontSize={labelSize} letterSpacing="2.5" fill="#EDEFFF">{text}</text>
                                <text x="90" y="271" textAnchor="middle" dominantBaseline="central" fontSize="15" fill="#C9D0E8">&#10022;</text>
                                <text x="230" y="271" textAnchor="middle" dominantBaseline="central" fontSize="15" fill="#C9D0E8">&#10022;</text>
                            </g>
                        )}
                    </g>
                </g>
        </svg>
    );
};

export default RankNIcon;