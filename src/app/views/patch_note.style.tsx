import styled from "styled-components";

export const PatchNote = styled('div')`
  width: 100%;
  max-width: 960px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`;

export const PatchNoteList = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 100%;
  padding: 3px;
  margin-bottom: 10px;
  background: #1b1e26;
  border: 1px solid #2c3038;
  border-radius: 12px;
  -webkit-overflow-scrolling: touch;
`;

export const PatchNoteTab = styled('button')<{ $active?: boolean }>`
  flex-shrink: 0;
  appearance: none;
  border: none;
  cursor: pointer;
  width: calc(100% / 12);
  padding: 8px 10px;
  border-radius: 8px;
  font-family: 'Noto Sans KR', 'Pretendard', -apple-system, sans-serif;
  font-size: clamp(0.8rem, 1.6vw, 1.2rem);
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: ${({ $active }) => ($active ? "#14161c" : "#b2b2c2")};
  background: ${({ $active }) =>
    $active
      ? "#53c6aa"
      : "transparent"};
  box-shadow: ${({ $active }) =>
    $active ? "0 4px 12px rgba(200, 170, 110, 0.25)" : "none"};
  transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: ${({ $active }) => ($active ? "#14161c" : "#f0e6d2")};
    background: ${({ $active }) =>
      $active
        ? "#53c6aa"
        : "rgba(255, 255, 255, 0.06)"};
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 1024px) {
    width: calc(100% / 8);
  }

  @media (max-width: 768px) {
    width: calc(100% / 6);
    font-size: clamp(0.78rem, 2.6vw, 1rem);
    padding: 7px 6px;
  }

  @media (max-width: 480px) {
    width: calc(100% / 4);
    font-size: clamp(0.75rem, 3.4vw, 0.95rem);
    padding: 6px 4px;
  }
`;

export const PatchNoteView = styled('div')`
  --pn-bg: #14161c;
  --pn-surface: #1b1e26;
  --pn-surface-2: #22252f;
  --pn-border: #2c3038;
  --pn-text: #e8e6e1;
  --pn-text-dim: #9a9ea8;
  --pn-gold: #c8aa6e;
  --pn-gold-bright: #f0e6d2;
  --pn-buff: #4fd1a5;
  --pn-nerf: #f26d6d;

  min-width: 100%;
  background: var(--pn-bg);
  color: var(--pn-text);
  font-family: 'Noto Sans KR', 'Pretendard', -apple-system, sans-serif;
  font-size: clamp(16px, 2.6vw, 25px);
  line-height: 1.8;
  border-radius: 14px;
  word-break: keep-all;
  overflow-wrap: break-word;

  div.content-border {
    background: var(--pn-surface);
    border: 1px solid var(--pn-border);
    border-radius: 18px;
    padding: clamp(16px, 4vw, 40px) clamp(16px, 4.5vw, 44px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    margin-bottom: clamp(16px, 3vw, 32px);
  }

  span.content-border {
    display: inline-block;
    border-radius: 12px;
    overflow: hidden;
    line-height: 0;
  }

  span.content-border img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }

  img {
    max-width: 100%;
  }

  .white-stone {
    position: relative;
    padding-left: clamp(14px, 2.8vw, 28px);
  }

  .white-stone.accent-before::before {
    content: "";
    position: absolute;
    left: 0;
    top: 4px;
    bottom: 4px;
    width: 4px;
    border-radius: 3px;
    background: linear-gradient(180deg, var(--pn-gold), transparent);
  }

  .change-detail-title:not(.ability-title) {
    font-size: clamp(1.3rem, 3.4vw, 1.8rem);
    font-weight: 700;
    color: var(--pn-gold-bright);
    margin: clamp(24px, 5vw, 48px) 0 clamp(12px, 2.5vw, 21px);
    letter-spacing: -0.01em;
  }

  > .content-border > .white-stone > div > .change-detail-title:first-child,
  .change-detail-title:not(.ability-title):first-of-type {
    font-size: clamp(1.5rem, 4.2vw, 2.25rem);
    font-weight: 800;
    color: var(--pn-gold-bright);
    margin-top: 0;
  }

  .change-detail-title.ability-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: clamp(10px, 2.4vw, 20px);
    font-weight: 700;
    font-size: clamp(1.2rem, 3.2vw, 1.7rem);
    color: var(--pn-gold-bright);
    margin: clamp(22px, 4.5vw, 42px) 0 clamp(10px, 2vw, 18px);
  }

  h3.change-detail-title.ability-title {
    font-size: clamp(1.35rem, 3.6vw, 2rem);
    padding-top: clamp(8px, 1.6vw, 15px);
  }

  h4.change-detail-title.ability-title {
    font-size: clamp(1.1rem, 3vw, 1.65rem);
    color: var(--pn-text);
  }

  .change-detail-title.ability-title img {
    width: clamp(40px, 8vw, 72px);
    height: clamp(40px, 8vw, 72px);
    border-radius: 14px;
    border: 1px solid var(--pn-border);
    object-fit: cover;
    flex-shrink: 0;
    background: var(--pn-surface-2);
  }

  h4.change-detail-title.ability-title img {
    width: clamp(34px, 6.5vw, 60px);
    height: clamp(34px, 6.5vw, 60px);
    border-radius: 12px;
  }

  .blockquote.context {
    background: var(--pn-surface-2);
    border-left: 4px solid var(--pn-border);
    border-radius: 0 10px 10px 0;
    padding: clamp(14px, 3vw, 27px) clamp(14px, 3.5vw, 33px);
    margin: clamp(14px, 2.5vw, 21px) 0 clamp(20px, 3.5vw, 33px);
    color: var(--pn-text-dim);
    font-size: clamp(1.05rem, 2.8vw, 1.5rem);
    font-style: normal;
  }

  .blockquote.context p {
    margin: 0;
  }

  .blockquote.context p + p {
    margin-top: clamp(10px, 2vw, 18px);
  }

  .divider {
    border: none;
    border-top: 1px solid var(--pn-border);
    margin: clamp(24px, 4.5vw, 42px) 0;
    opacity: 0.7;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 clamp(10px, 2vw, 15px);
  }

  ul li {
    position: relative;
    padding: clamp(8px, 1.6vw, 13px) 0 clamp(8px, 1.6vw, 13px) clamp(20px, 3.4vw, 30px);
    font-size: clamp(1.05rem, 2.8vw, 1.5rem);
    color: var(--pn-text-dim);
    border-bottom: 1px dashed rgba(255, 255, 255, 0.06);
  }

  ul li:last-child {
    border-bottom: none;
  }

  ul li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: var(--pn-gold);
    font-size: clamp(0.95rem, 2.4vw, 1.35rem);
  }

  ul li strong:first-child {
    color: var(--pn-text);
    font-weight: 600;
  }

  ul li strong:last-child {
    color: var(--pn-gold-bright);
    font-weight: 700;
    background: rgba(200, 170, 110, 0.12);
    padding: 2px clamp(6px, 1.5vw, 12px);
    border-radius: 6px;
  }

  p:has(> a.reference-link),
  p:has(> a.skins) {
    margin: 0;
    line-height: 0;
  }

  h3.change-title {
    font-size: clamp(1.4rem, 3.6vw, 1.95rem);
    font-weight: 700;
    color: var(--pn-gold-bright);
    margin: 8px 0 clamp(12px, 2.4vw, 18px);
  }

  h3.change-title a {
    color: inherit;
    text-decoration: none;
  }

  h3.change-title a:hover {
    text-decoration: underline;
  }

  .reference-link img,
  .skins img {
    width: clamp(48px, 10vw, 84px);
    height: clamp(48px, 10vw, 84px);
    border-radius: 14px;
    border: 1px solid var(--pn-border);
    object-fit: cover;
    background: var(--pn-surface-2);
  }

  .change-indicator {
    color: var(--pn-gold);
    font-weight: 700;
    margin: 0 3px;
  }

  span[style*="background-color"] {
    display: inline-block;
    padding: 2px clamp(6px, 1.5vw, 12px);
    border-radius: 6px;
    font-size: clamp(0.9rem, 2.4vw, 1.3rem);
    font-weight: 700;
    color: var(--pn-bg) !important;
    background-color: inherit;
  }

  .ck-list-marker-bold {
    font-weight: 700;
  }

  .ck-list-marker-italic {
    font-style: italic;
    color: var(--pn-text-dim);
  }

  .gs-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(12px, 2.8vw, 28px);
    margin: clamp(16px, 2.8vw, 28px) 0;
  }

  .gs-container.default-2-col {
    grid-template-columns: repeat(2, 1fr);
  }

  .skin-box {
    background: var(--pn-surface-2);
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--pn-border);
  }

  .skin-box img {
    width: 100%;
    height: auto;
    display: block;
  }

  .skin-title {
    padding: clamp(10px, 2vw, 18px) clamp(12px, 2.2vw, 20px);
    font-size: clamp(1.05rem, 2.6vw, 1.5rem);
    font-weight: 600;
    color: var(--pn-gold-bright);
    text-align: center;
    margin: 0;
  }

  .skin-title a {
    color: inherit;
    text-decoration: none;
  }

  .table-wrapper {
    overflow-x: auto;
    margin: clamp(16px, 2.8vw, 28px) 0;
    border-radius: 10px;
    border: 1px solid var(--pn-border);
    -webkit-overflow-scrolling: touch;
  }

  table {
    width: 100%;
    min-width: 420px;
    border-collapse: collapse;
    background: var(--pn-surface-2);
  }

  table td,
  table th {
    border: 1px solid var(--pn-border) !important;
    padding: clamp(8px, 1.8vw, 18px) !important;
    text-align: center;
    color: var(--pn-text);
    font-size: clamp(1rem, 2.6vw, 1.47rem);
  }

  table img {
    max-width: clamp(56px, 8vw, 108px);
    border-radius: 10px;
  }

  p > a > img {
    max-width: 100%;
    border-radius: 16px;
    margin: clamp(8px, 1.8vw, 14px) 0;
  }

  @media (max-width: 768px) {
    .change-detail-title.ability-title {
      gap: 12px;
    }
  }

  @media (max-width: 480px) {
    border-radius: 8px;

    div.content-border {
      border-radius: 12px;
    }

    .gs-container.default-2-col {
      grid-template-columns: 1fr;
    }

    .change-detail-title.ability-title {
      gap: 10px;
    }

    table {
      min-width: 360px;
    }
  }
`;
