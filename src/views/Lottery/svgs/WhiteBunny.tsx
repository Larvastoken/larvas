import React from 'react'
import { Svg, SvgProps } from 'larvas-ui'

const WhiteBunny: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 27 26" {...props}>
      <mask
        id="white-bunny-path-1-outside-1"
        maskUnits="userSpaceOnUse"
        x="0.5"
        y="-0.0263672"
        width="26"
        height="26"
        fill="black"
      >
        <rect fill="white" x="0.5" y="-0.0263672" width="26" height="26" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.909 3.56941C7.03125 1.79519 8.76206 0.588231 10.4692 1.08677C11.9461 1.51808 12.7937 3.06497 12.3624 4.54184L11.1683 8.63073C11.9225 8.53996 12.7022 8.49237 13.5 8.49237C14.6339 8.49237 15.731 8.58848 16.7708 8.76808L18.74 2.99564C19.2367 1.53947 20.8199 0.761724 22.2761 1.25849C23.9593 1.83269 24.6807 3.81559 23.7601 5.3372L20.9057 10.0551C23.7031 11.3976 25.5 13.4834 25.5 15.8257L25.5 15.8267V17.6934C25.5 21.7435 20.1274 25.0267 13.5 25.0267C6.87258 25.0267 1.5 21.7435 1.5 17.6934V15.8267V15.8257C1.5 13.379 3.46066 11.2122 6.47417 9.88004L6.909 3.56941Z"
        />
      </mask>
      <path
        d="M10.4692 1.08677L10.7142 0.247673V0.247673L10.4692 1.08677ZM6.909 3.56941L7.78108 3.6295V3.62949L6.909 3.56941ZM12.3624 4.54184L13.2015 4.78689V4.78689L12.3624 4.54184ZM11.1683 8.63073L10.3292 8.38568L9.95792 9.65684L11.2727 9.49862L11.1683 8.63073ZM16.7708 8.76808L16.622 9.62947L17.3572 9.75647L17.5981 9.05032L16.7708 8.76808ZM18.74 2.99564L19.5673 3.27788V3.27788L18.74 2.99564ZM22.2761 1.25849L22.5583 0.431153V0.431153L22.2761 1.25849ZM23.7601 5.3372L23.0122 4.88469V4.88469L23.7601 5.3372ZM20.9057 10.0551L20.1578 9.60256L19.6593 10.4265L20.5275 10.8432L20.9057 10.0551ZM25.5 15.8257H24.6258L24.6259 15.8274L25.5 15.8257ZM25.5 15.8267H26.3742L26.3742 15.8251L25.5 15.8267ZM6.47417 9.88004L6.82762 10.6796L7.31 10.4663L7.34626 9.94013L6.47417 9.88004ZM10.7142 0.247673C8.47144 -0.407305 6.19752 1.17838 6.03691 3.50932L7.78108 3.62949C7.86497 2.412 9.05268 1.58377 10.2241 1.92587L10.7142 0.247673ZM13.2015 4.78689C13.7681 2.84659 12.6545 0.814314 10.7142 0.247673L10.2241 1.92587C11.2376 2.22184 11.8192 3.28334 11.5233 4.2968L13.2015 4.78689ZM12.0074 8.87578L13.2015 4.78689L11.5233 4.2968L10.3292 8.38568L12.0074 8.87578ZM13.5 7.61822C12.6675 7.61822 11.853 7.66787 11.0638 7.76284L11.2727 9.49862C11.9921 9.41204 12.7369 9.36652 13.5 9.36652V7.61822ZM16.9195 7.90668C15.8299 7.71847 14.683 7.61822 13.5 7.61822V9.36652C14.5847 9.36652 15.632 9.45848 16.622 9.62947L16.9195 7.90668ZM17.5981 9.05032L19.5673 3.27788L17.9127 2.7134L15.9434 8.48584L17.5981 9.05032ZM19.5673 3.27788C19.9082 2.27864 20.9946 1.74493 21.9938 2.08582L22.5583 0.431153C20.6452 -0.221485 18.5653 0.800311 17.9127 2.7134L19.5673 3.27788ZM21.9938 2.08582C23.1489 2.47985 23.644 3.84054 23.0122 4.88469L24.5081 5.7897C25.7175 3.79064 24.7697 1.18554 22.5583 0.431153L21.9938 2.08582ZM23.0122 4.88469L20.1578 9.60256L21.6536 10.5076L24.5081 5.7897L23.0122 4.88469ZM26.3741 15.8257C26.3741 12.9967 24.2198 10.676 21.284 9.26698L20.5275 10.8432C23.1864 12.1193 24.6259 13.9701 24.6259 15.8257H26.3741ZM26.3742 15.8251L26.3741 15.8241L24.6259 15.8274L24.6259 15.8284L26.3742 15.8251ZM26.3742 17.6934V15.8267H24.6259V17.6934H26.3742ZM13.5 25.9009C16.9478 25.9009 20.1111 25.0486 22.4411 23.6247C24.7561 22.21 26.3742 20.1382 26.3742 17.6934H24.6259C24.6259 19.2987 23.5576 20.8935 21.5295 22.1329C19.5163 23.3632 16.6797 24.1526 13.5 24.1526V25.9009ZM0.62585 17.6934C0.62585 20.1382 2.24387 22.21 4.55889 23.6247C6.88892 25.0486 10.0523 25.9009 13.5 25.9009V24.1526C10.3203 24.1526 7.48367 23.3632 5.47054 22.1329C3.44242 20.8935 2.37415 19.2987 2.37415 17.6934H0.62585ZM0.62585 15.8267V17.6934H2.37415V15.8267H0.62585ZM0.62585 15.8257V15.8267H2.37415V15.8257H0.62585ZM6.12073 9.08053C2.97211 10.4725 0.62585 12.8707 0.62585 15.8257H2.37415C2.37415 13.8874 3.94921 11.952 6.82762 10.6796L6.12073 9.08053ZM6.03691 3.50932L5.60209 9.81995L7.34626 9.94013L7.78108 3.6295L6.03691 3.50932Z"
        fill="#08060B"
        mask="url(#path-1-outside-1)"
      />
      <path
        d="M25.5 17.6933C25.5 21.7434 20.1274 25.0267 13.5 25.0267C6.87258 25.0267 1.5 21.7434 1.5 17.6933V15.8267H25.5V17.6933Z"
        fill="#F4EEFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.909 3.56941C7.03125 1.79519 8.76206 0.588231 10.4692 1.08677C11.9461 1.51808 12.7937 3.06497 12.3624 4.54184L11.1683 8.63073C11.9225 8.53996 12.7022 8.49237 13.5 8.49237C14.6339 8.49237 15.731 8.58848 16.7708 8.76808L18.74 2.99564C19.2367 1.53947 20.8199 0.761724 22.2761 1.25849C23.9593 1.83269 24.6807 3.81559 23.7601 5.3372L20.9057 10.0551C23.7031 11.3976 25.5 13.4834 25.5 15.8257C25.5 19.8758 20.1274 23.159 13.5 23.159C6.87258 23.159 1.5 19.8758 1.5 15.8257C1.5 13.379 3.46066 11.2122 6.47417 9.88004L6.909 3.56941Z"
        fill="white"
      />
      <ellipse cx="10.4334" cy="15.292" rx="1.33333" ry="2" fill="#08060B" />
      <ellipse cx="19.6331" cy="15.292" rx="1.33333" ry="2" fill="#08060B" />
    </Svg>
  )
}

export default WhiteBunny
