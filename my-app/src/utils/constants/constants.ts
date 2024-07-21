export const currentUrl = new URL(window.location.href);
const parts: string[] = String(currentUrl).split('/');
export const productId: string = parts[parts.length - 1];

export const style = {
    width: 560,
    display: 'inline-table',
    height: 'auto',
    bgcolor: ' rgba(255, 255, 255, 1)',
    borderRadius: '24px',
    boxShadow: ' 0px 16px 40px 0px rgba(23, 32, 41, 0.32)',
    p: 4,
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};
export type stylesTitle =
    | 'name'
    | 'red'
    | 'bold'
    | 'bigName'
    | 'price'
    | 'bigPrice'
    | 'description';
