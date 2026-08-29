import type { SVGProps } from 'react';

type Props = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
    size?: number;
    compact?: boolean;
    crown?: boolean;
    idPrefix?: string;
};

const BOX = {
    full: [36, 70, 248, 212],
    compact: [36, 70, 248, 170],
    fullCrown: [36, 26, 248, 256],
    compactCrown: [36, 26, 248, 214],
};

const Rank3Icon = ({ size = 48, compact = false, crown = true, idPrefix = 'rank3', ...props }: Props) => {
    const uid = idPrefix;
    const box = crown
        ? (compact ? BOX.compactCrown : BOX.fullCrown)
        : (compact ? BOX.compact : BOX.full);
    const ariaLabel = 'Rank badge 3RD';

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
                    <stop offset="0" stopColor="#FFE0B8"/>
                    <stop offset=".3" stopColor="#E79A4E"/>
                    <stop offset=".52" stopColor="#9C5322"/>
                    <stop offset=".72" stopColor="#E79A4E"/>
                    <stop offset="1" stopColor="#61300F"/>
                </linearGradient>
                <linearGradient id={`${uid}-leaf`} x1="0" y1="1" x2=".85" y2="0">
                    <stop offset="0" stopColor="#61300F"/>
                    <stop offset=".38" stopColor="#9C5322"/>
                    <stop offset=".74" stopColor="#E79A4E"/>
                    <stop offset="1" stopColor="#FFE0B8"/>
                </linearGradient>
                <linearGradient id={`${uid}-ring`} x1="0" y1="0" x2=".6" y2="1">
                    <stop offset="0" stopColor="#FFE0B8"/>
                    <stop offset=".22" stopColor="#E79A4E"/>
                    <stop offset=".5" stopColor="#61300F"/>
                    <stop offset=".78" stopColor="#E79A4E"/>
                    <stop offset="1" stopColor="#FFE0B8"/>
                </linearGradient>
                <radialGradient id={`${uid}-disc`} cx=".5" cy=".38" r=".72">
                    <stop offset="0" stopColor="#3A1A08"/>
                    <stop offset="1" stopColor="#160802"/>
                </radialGradient>
                <linearGradient id={`${uid}-ribbon`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#B02F2F"/>
                    <stop offset=".55" stopColor="#5E1212"/>
                    <stop offset="1" stopColor="#420B0B"/>
                </linearGradient>
                <linearGradient id={`${uid}-gem`} x1=".2" y1="0" x2=".8" y2="1">
                    <stop offset="0" stopColor="#FFD9A0"/>
                    <stop offset=".45" stopColor="#FF8A1F"/>
                    <stop offset="1" stopColor="#C24A00"/>
                </linearGradient>
                <linearGradient id={`${uid}-num`} x1=".1" y1="0" x2=".7" y2="1">
                    <stop offset="0" stopColor="#FFE0B8"/>
                    <stop offset=".45" stopColor="#E79A4E"/>
                    <stop offset="1" stopColor="#9C5322"/>
                </linearGradient>
                <radialGradient id={`${uid}-glow`} cx=".5" cy=".5" r=".5">
                    <stop offset="0" stopColor="#FF9138" stopOpacity=".5"/>
                    <stop offset=".55" stopColor="#FF9138" stopOpacity=".16"/>
                    <stop offset="1" stopColor="#FF9138" stopOpacity="0"/>
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
                            <path d="M0 0C15 -12 21 -31 12 -50C9 -58 3 -63 0 -68C-4 -60 -14 -34 -10 -14C-8 -5 -4 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FFE0B8" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(224.3 200.5) rotate(38.7) scale(1.238 1.238)">
                            <path d="M0 0C15 -12 21 -31 12 -50C9 -58 3 -63 0 -68C-4 -60 -14 -34 -10 -14C-8 -5 -4 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FFE0B8" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(234.3 175.0) rotate(27.3) scale(1.203 1.203)">
                            <path d="M0 0C15 -12 21 -31 12 -50C9 -58 3 -63 0 -68C-4 -60 -14 -34 -10 -14C-8 -5 -4 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FFE0B8" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(225.6 148.5) rotate(16.0) scale(1.075 1.075)">
                            <path d="M0 0C15 -12 21 -31 12 -50C9 -58 3 -63 0 -68C-4 -60 -14 -34 -10 -14C-8 -5 -4 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FFE0B8" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(119.4 212.7) rotate(-50.0) scale(-1.160 1.160)">
                            <path d="M0 0C15 -12 21 -31 12 -50C9 -58 3 -63 0 -68C-4 -60 -14 -34 -10 -14C-8 -5 -4 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FFE0B8" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(95.7 200.5) rotate(-38.7) scale(-1.238 1.238)">
                            <path d="M0 0C15 -12 21 -31 12 -50C9 -58 3 -63 0 -68C-4 -60 -14 -34 -10 -14C-8 -5 -4 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FFE0B8" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(85.7 175.0) rotate(-27.3) scale(-1.203 1.203)">
                            <path d="M0 0C15 -12 21 -31 12 -50C9 -58 3 -63 0 -68C-4 -60 -14 -34 -10 -14C-8 -5 -4 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FFE0B8" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                        <g transform="translate(94.4 148.5) rotate(-16.0) scale(-1.075 1.075)">
                            <path d="M0 0C15 -12 21 -31 12 -50C9 -58 3 -63 0 -68C-4 -60 -14 -34 -10 -14C-8 -5 -4 -3 0 0Z" fill={`url(#${uid}-leaf)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M0 -4C4 -18 6 -36 3 -54" fill="none" stroke="#FFE0B8" strokeWidth="2" strokeOpacity=".45" strokeLinecap="round"/>
                        </g>
                    </g>
                    {crown && !compact && (
                        <g className="rb-crown">
                            <path d="M120 96L126 60L143 80L160 46L177 80L194 60L200 96Z" fill={`url(#${uid}-metal)`} stroke="#7A3F16" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M117 88Q160 98 203 88L203 104Q160 114 117 104Z" fill={`url(#${uid}-ring)`} stroke="#7A3F16" strokeWidth="2.2" strokeLinejoin="round"/>
                            <path d="M160 30L170 46L160 62L150 46Z" fill={`url(#${uid}-gem)`} stroke="#7A3F16" strokeWidth="1.6" strokeLinejoin="round"/>
                            <circle cx="126" cy="60" r="5" fill={`url(#${uid}-gem)`} stroke="#7A3F16" strokeWidth="1.3"/>
                            <circle cx="194" cy="60" r="5" fill={`url(#${uid}-gem)`} stroke="#7A3F16" strokeWidth="1.3"/>
                        </g>
                    )}
                    <g className="rb-medal">
                        <circle cx="160" cy="156" r="80" fill={`url(#${uid}-ring)`} stroke="#7A3F16" strokeWidth="2.5"/>
                        <circle cx="160" cy="156" r="70" fill={`url(#${uid}-metal)`} opacity=".9"/>
                        <circle cx="160" cy="156" r="63" fill={`url(#${uid}-disc)`} stroke="#7A3F16" strokeWidth="3"/>
                        <circle cx="160" cy="156" r="63" fill={`url(#${uid}-sheen)`}/>
                        <path d="M104 128A63 63 0 0 1 178 96" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="4" strokeLinecap="round"/>
                        <text className="rb-num-shadow" x="160" y="157" textAnchor="middle" dominantBaseline="central" fontFamily="'Arial Black','Helvetica Neue',Arial,sans-serif" fontWeight="900" fontSize="96" fill="#000" fillOpacity=".45">3</text>
                        <text className="rb-num" x="160" y="153" textAnchor="middle" dominantBaseline="central" fontFamily="'Arial Black','Helvetica Neue',Arial,sans-serif" fontWeight="900" fontSize="96" fill={`url(#${uid}-num)`} stroke="#7A3F16" strokeWidth="1.6" paintOrder="stroke">3</text>
                    </g>
                    {!compact && (
                        <g className="rb-ribbon" transform="translate(0 -26)">
                            <path d="M66 238L34 246L48 272L34 300L66 292Z" fill={`url(#${uid}-ribbon)`} stroke="#420B0B" strokeWidth="2" strokeLinejoin="round"/>
                            <path d="M254 238L286 246L272 272L286 300L254 292Z" fill={`url(#${uid}-ribbon)`} stroke="#420B0B" strokeWidth="2" strokeLinejoin="round"/>
                            <path d="M66 234Q160 246 254 234L254 298Q160 310 66 298Z" fill={`url(#${uid}-ribbon)`} stroke="#420B0B" strokeWidth="2.4" strokeLinejoin="round"/>
                            <path d="M66 234Q160 246 254 234L254 250Q160 262 66 250Z" fill="#fff" fillOpacity=".14"/>
                            <path d="M72 240Q160 252 248 240" fill="none" stroke="#E79A4E" strokeWidth="1.6" strokeOpacity=".55"/>
                            <path d="M72 294Q160 306 248 294" fill="none" stroke="#E79A4E" strokeWidth="1.6" strokeOpacity=".45"/>
                            <text x="160" y="274" textAnchor="middle" dominantBaseline="central" fontFamily="'Arial Black','Helvetica Neue',Arial,sans-serif" fontWeight="900" fontSize="34" letterSpacing="2.5" fill="#000" fillOpacity=".45">3RD</text>
                            <text className="rb-label" x="160" y="272" textAnchor="middle" dominantBaseline="central" fontFamily="'Arial Black','Helvetica Neue',Arial,sans-serif" fontWeight="900" fontSize="34" letterSpacing="2.5" fill="#FFE2BC">3RD</text>
                            <text x="90" y="271" textAnchor="middle" dominantBaseline="central" fontSize="15" fill="#E79A4E">&#10022;</text>
                            <text x="230" y="271" textAnchor="middle" dominantBaseline="central" fontSize="15" fill="#E79A4E">&#10022;</text>
                        </g>
                    )}
                </g>
            </g>
        </svg>
    );
};

export default Rank3Icon;