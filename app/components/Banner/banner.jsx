import Styles from './banner.module.css';

export const Banner = () => {
	return (
		<section className={Styles['banner']}>
			<div className='banner__description'>
				<h1 className={Styles['title']}>Портал инди-игр от&nbsp;студентов Яндекс Практикума</h1>
				<div className={Styles['text-block']}>
					<p className='banner__text'>
						Студенты курсов разрабатывают свои игры на Unity, здесь мы их публикуем. Вы можете играть прямо на сайте. А
						если у вас есть аккаунт пользователя — получаете возможность голосовать за игры.
					</p>
				</div>
				<a href='#popular' className={`button ${Styles.link}`}>
					Смотреть игры
				</a>
			</div>
			<img src='/images/banner-illustration.jpg' alt='Рука, утопленная в желтом фоне' className={Styles['image']} />
		</section>
	);
};
