import { Box, Modal } from '@mui/material';

import { MyButton } from '@/components/ui/button/button';
import { Title } from '@/components/ui/title/title';
import { style } from '@/utils/constants/constants';
import { formatPrice } from '@/utils/helpers/formatPrice';
import { useGetStateCart } from '@/utils/hooks/useGetStateCart';
import { ICart } from '@/utils/interfaces/interfaces';

import styles from './cart.module.css';

export const Cart = ({ active, setActive }: ICart) => {
    const handleClose = () => setActive(false);
    const { data } = useGetStateCart();
    return (
        <div>
            <Modal open={active} onClose={handleClose} className={styles.modal}>
                <Box sx={style}>
                    <div>
                        <ul>
                            {data?.map(product => (
                                <li key={product.product.id}>
                                    {product.product.title}
                                    <div className={styles.amount_block}>
                                        <div className={styles.total}>
                                            <h2 className={styles.total_text}>
                                                Итого
                                            </h2>
                                            <div className={styles.price}>
                                                <Title
                                                    children={formatPrice(
                                                        product.product.price,
                                                    )}
                                                    style="bigPrice"
                                                />
                                            </div>
                                        </div>
                                        <MyButton children="Оформить заказ" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};
