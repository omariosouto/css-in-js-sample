import { Text } from '@skynexui/components';

// const theme = {
//     text: {
//         h1: {
//             fontSize: '12px',
//         },
//         h2: {
//             fontSize: '8px',
//         },
//     }
// }

// function Text({ children, tag }) {
//     const Tag = tag;
//     return (
//         <>
//             <Tag>
//                 {children}
//             </Tag>
//             <style jsx>{`
//                 ${Tag} {    
//                     font-size: ${theme.text[Tag].fontSize};
//                     font-family: sans-serif;
//                     color: red;
//                 }
//             `}</style>
//         </>
//     );
// }

// Text.defaultProps = {
//     tag: 'h1',
// }


export default function HomeScreen() {
    return (
        <div>
            <Text>
                Bem vindo ao meu site!
            </Text>
            <Text tag="h2">
                Site do DevSoutinho
            </Text>
            <Text
                tag="h3"
                variant='heading1'
                styleSheet={{
                    // color: 'red',
                    color: {
                        xs: 'red',
                        xl: 'blue'
                    }
                }}
            >
                Text Component
            </Text>
        </div>
    );
}