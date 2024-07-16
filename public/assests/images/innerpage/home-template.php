<?php get_header();
//Template Name: New Home ?>

<!-- Home Banner -->
<section className="home-banner">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-5 content-box wow fadeInLeft">        
		<div className="banner-form">
			<h1><?php the_field('banner_title', 9131); ?></h1>
		</div>
			<div className="cont-btn">
			<?php 
			$link = get_field('contact_button');
			if( $link ): 
				$link_url = $link['url'];
				$link_title = $link['title'];
				$link_target = $link['target'] ? $link['target'] : '_self';
			?>
            <a  href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
			<?php endif; ?>
			</div>
      </div>
      <div className="col-lg-7 slide-contents wow fadeInRight">
        <h2><?php the_field('slide_title', 9131); ?></h2>
        <div className="owl-carousel owl-theme banner-slide">
          <?php
          $slide_1 = get_field('slide_1', 9131);
          if ($slide_1) {
            $title = $slide_1['title'];
            $image = $slide_1['image'];
            $url = $slide_1['url'];
            if ($slide_1) {
          ?>
          <div className="item">
            <div className="slide-content"><a href="<?php echo $url ? $url : 'N/A'; ?>">
              <img src="<?php echo $image ? $image : 'N/A'; ?>" alt="<?php echo $title ? $title : 'N/A'; ?>">
              <div className="title"><span><?php echo $title ? $title : 'N/A'; ?></span></div>
				</a></div>
          </div>
          <?php
            }
          } else {
            echo '<div className="detail_adress"><p>No DATA available.</p></div>';
          }
          ?>

          <?php
          $slide_2 = get_field('slide_2', 9131);
          if ($slide_2) {
            $title = $slide_2['title'];
            $image = $slide_2['image'];
			  $url = $slide_2['url'];
            if ($slide_2) {
          ?>
          <div className="item">
            <div className="slide-content"><a href="<?php echo $url ? $url : 'N/A'; ?>">
              <img src="<?php echo $image ? $image : 'N/A'; ?>" alt="<?php echo $title ? $title : 'N/A'; ?>">
              <div className="title"><span><?php echo $title ? $title : 'N/A'; ?></span></div>
				</a></div>
          </div>
          <?php
            }
          } else {
            echo '<div className="detail_adress"><p>No DATA available.</p></div>';
          }
          ?>
          <?php
          $slide_3 = get_field('slide_3', 9131);
          if ($slide_3) {
            $title = $slide_3['title'];
            $image = $slide_3['image'];
			  $url = $slide_3['url'];
            if ($slide_3) {
          ?>
          <div className="item">
            <div className="slide-content"><a href="<?php echo $url ? $url : 'N/A'; ?>">
              <img src="<?php echo $image ? $image : 'N/A'; ?>" alt="<?php echo $title ? $title : 'N/A'; ?>">
              <div className="title"><span><?php echo $title ? $title : 'N/A'; ?></span></div>
				</a></div>
          </div>
          <?php
            }
          } else {
            echo '<div className="detail_adress"><p>No DATA available.</p></div>';
          }
          ?>

          <?php
          $slide_4 = get_field('slide_4', 9131);
          if ($slide_4) {
            $title = $slide_4['title'];
            $image = $slide_4['image'];
			  $url = $slide_4['url'];
            if ($slide_4) {
          ?>
          <div className="item">
            <div className="slide-content"><a href="<?php echo $url ? $url : 'N/A'; ?>">
              <img src="<?php echo $image ? $image : 'N/A'; ?>" alt="<?php echo $title ? $title : 'N/A'; ?>">
              <div className="title"><span><?php echo $title ? $title : 'N/A'; ?></span></div>
				</a></div>
          </div>
          <?php
            }
          } else {
            echo '<div className="detail_adress"><p>No DATA available.</p></div>';
          }
          ?>
          <?php
          $slide_5 = get_field('slide_5', 9131);
          if ($slide_5) {
            $title = $slide_5['title'];
            $image = $slide_5['image'];
			  $url = $slide_5['url'];
            if ($slide_5) {
          ?>
          <div className="item">
            <div className="slide-content"><a href="<?php echo $url ? $url : 'N/A'; ?>">
              <img src="<?php echo $image ? $image : 'N/A'; ?>" alt="<?php echo $title ? $title : 'N/A'; ?>">
              <div className="title"><span><?php echo $title ? $title : 'N/A'; ?></span></div>
				</a></div>
          </div>
          <?php
            }
          } else {
            echo '<div className="detail_adress"><p>No DATA available.</p></div>';
          }
          ?>

          <?php
          $slide_6 = get_field('slide_6', 9131);
          if ($slide_6) {
            $title = $slide_6['title'];
            $image = $slide_6['image'];
			  $url = $slide_6['url'];
            if ($slide_6) {
          ?>
          <div className="item">
            <div className="slide-content"><a href="<?php echo $url ? $url : 'N/A'; ?>">
              <img src="<?php echo $image ? $image : 'N/A'; ?>" alt="<?php echo $title ? $title : 'N/A'; ?>">
              <div className="title"><span><?php echo $title ? $title : 'N/A'; ?></span></div>
				</a></div>
          </div>
          <?php
            }
          } else {
            echo '<div className="detail_adress"><p>No DATA available.</p></div>';
          }
          ?>

        </div>
      </div>
    </div>
  </div>
</section>
<!-- Home Banner Closed -->
<!-- About us Sec -->
<section className="about-sec wow pulse">
  <div className="container">
    <div className="bg">
      <div className="row">
        <?php
$about_us = get_field('about_us', 9131);
if ($about_us) {
  $about_title = $about_us['about_title'];
  $about_content = $about_us['about_content'];
  $about_button_url = $about_us['about_button_url'];
  $about_image = $about_us['about_image'];
  if ($about_us) {
    ?>
        <div className="col-lg-6 img-box"><img src="<?php echo $about_image ? $about_image : 'N/A'; ?>"
            alt="<?php echo $about_title ? $about_title : 'N/A'; ?>"></div>
        <div className="col-lg-6 content-box">
          <h3><?php echo $about_title ? $about_title : 'N/A'; ?></h3>
          <?php echo $about_content ? $about_content : 'N/A'; ?>
          <div className="custom-btn"><a href="<?php echo $about_button_url ? $about_button_url : 'N/A'; ?>"><i
                className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
        </div>
        <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
      </div>
    </div>
  </div>
</section>
<!-- About us Sec Closed -->
<!-- Location We Serve -->
<section className="location-we-serve wow fadeInDown">
  <div className="container">
    <div className="row">
      <div className="col-md-6 content-left">
      <h2><?php the_field('area_title', 9131);?></h2>
      <p><?php the_field('area_paragraph', 9131);?></p>
      </div>
      <div className="col-md-6 content-right">
      <ul className="area-list">
					<?php the_field('area_serve_lists', 9131);?>
				</ul>
				<?php 
				$link = get_field('serve_button');
				if( $link ): 
					$link_url = $link['url'];
					$link_title = $link['title'];
					$link_target = $link['target'] ? $link['target'] : '_self';
				?>
				<div className="custom-btn"><a  href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a></div>
				<?php endif; ?>
      </div>
    </div>
  </div>
</section>
<!-- Location We Serve Closed -->
<!-- We Serve -->
<section className="we-serve wow fadeInUp">

  <div className="container">
    <?php
  $areas_we_serve = get_field('areas_we_serve', 9131);
  if ($areas_we_serve) {
    $title = $areas_we_serve['title'];

    $south_florida_title_1 = $areas_we_serve['south_florida_title_1'];
    $south_florida_image_1 = $areas_we_serve['south_florida_image_1'];
    $south_florida_url_1 = $areas_we_serve['south_florida_url_1'];

    $south_florida_title_2 = $areas_we_serve['south_florida_title_2'];
    $south_florida_image_2 = $areas_we_serve['south_florida_image_2'];
    $south_florida_url_2 = $areas_we_serve['south_florida_url_2'];

    $south_florida_title_3 = $areas_we_serve['south_florida_title_3'];
    $south_florida_image_3 = $areas_we_serve['south_florida_image_3'];
    $south_florida_url_3 = $areas_we_serve['south_florida_url_3'];

    $south_florida_title_4 = $areas_we_serve['south_florida_title_4'];
    $south_florida_image_4 = $areas_we_serve['south_florida_image_4'];
    $south_florida_url_4 = $areas_we_serve['south_florida_url_4'];

    $south_florida_title_5 = $areas_we_serve['south_florida_title_5'];
    $south_florida_image_5 = $areas_we_serve['south_florida_image_5'];
    $south_florida_url_5 = $areas_we_serve['south_florida_url_5'];

    $south_florida_title_6 = $areas_we_serve['south_florida_title_6'];
    $south_florida_image_6 = $areas_we_serve['south_florida_image_6'];
    $south_florida_url_6 = $areas_we_serve['south_florida_url_6'];
    if ($areas_we_serve) {
      ?>
    <h3><?php echo $title ? $title : 'N/A'; ?></h3>
    <div className="owl-carousel owl-theme serve-slide">

      <div className="item">
        <div className="slide-content">
          <div className="img-box"><img src="<?php echo $south_florida_image_1 ? $south_florida_image_1 : 'N/A'; ?>"
              alt="<?php echo $south_florida_title_1 ? $south_florida_title_1 : 'N/A'; ?>"></div>
          <div className="content-box">
            <div className="title"><?php echo $south_florida_title_1 ? $south_florida_title_1 : 'N/A'; ?></div>
            <div className="read-more"><a href="<?php echo $south_florida_url_1 ? $south_florida_url_1 : 'N/A'; ?>"><i
                  className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="slide-content">
          <div className="img-box"><img src="<?php echo $south_florida_image_2 ? $south_florida_image_2 : 'N/A'; ?>"
              alt="<?php echo $south_florida_title_2 ? $south_florida_title_2 : 'N/A'; ?>"></div>
          <div className="content-box">
            <div className="title"><?php echo $south_florida_title_2 ? $south_florida_title_2 : 'N/A'; ?></div>
            <div className="read-more"><a href="<?php echo $south_florida_url_2 ? $south_florida_url_2 : 'N/A'; ?>"><i
                  className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="slide-content">
          <div className="img-box"><img src="<?php echo $south_florida_image_3 ? $south_florida_image_3 : 'N/A'; ?>"
              alt="<?php echo $south_florida_title_3 ? $south_florida_title_3 : 'N/A'; ?>"></div>
          <div className="content-box">
            <div className="title"><?php echo $south_florida_title_3 ? $south_florida_title_3 : 'N/A'; ?></div>
            <div className="read-more"><a href="<?php echo $south_florida_url_3 ? $south_florida_url_3 : 'N/A'; ?>"><i
                  className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="slide-content">
          <div className="img-box"><img src="<?php echo $south_florida_image_4 ? $south_florida_image_4 : 'N/A'; ?>"
              alt="<?php echo $south_florida_title_4 ? $south_florida_title_4 : 'N/A'; ?>"></div>
          <div className="content-box">
            <div className="title"><?php echo $south_florida_title_4 ? $south_florida_title_4 : 'N/A'; ?></div>
            <div className="read-more"><a href="<?php echo $south_florida_url_4 ? $south_florida_url_4 : 'N/A'; ?>"><i
                  className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="slide-content">
          <div className="img-box"><img src="<?php echo $south_florida_image_5 ? $south_florida_image_5 : 'N/A'; ?>"
              alt="<?php echo $south_florida_title_5 ? $south_florida_title_5 : 'N/A'; ?>"></div>
          <div className="content-box">
            <div className="title"><?php echo $south_florida_title_5 ? $south_florida_title_5 : 'N/A'; ?></div>
            <div className="read-more"><a href="<?php echo $south_florida_url_5 ? $south_florida_url_5 : 'N/A'; ?>"><i
                  className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="slide-content">
          <div className="img-box"><img src="<?php echo $south_florida_image_6 ? $south_florida_image_6 : 'N/A'; ?>"
              alt="<?php echo $south_florida_title_6 ? $south_florida_title_6 : 'N/A'; ?>"></div>
          <div className="content-box">
            <div className="title"><?php echo $south_florida_title_6 ? $south_florida_title_6 : 'N/A'; ?></div>
            <div className="read-more"><a href="<?php echo $south_florida_url_6 ? $south_florida_url_6 : 'N/A'; ?>"><i
                  className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>

      <?php
    }
  } else {
    echo '<div className="detail_adress"><p>No DATA available.</p></div>';
  }
  ?>
    </div>
  </div>
</section>
<!-- We Serve Closed -->
<!-- Why Coose Us -->
<section className="why-choose-us">
  <div className="container">
    <div className="bg wow flash">
      <?php
$why_choose = get_field('why_choose', 9131);
if ($why_choose) {
  $title = $why_choose['title'];
  $content = $why_choose['content'];
  if ($why_choose) {
    ?>
      <h3><?php echo $title ? $title : 'N/A'; ?></h3>
      <p><?php echo $content ? $content : 'N/A'; ?></p>
      <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
      <div className="row">
        <ul className="list-items">
          <li>
            <?php
$article_1 = get_field('article_1', 9131);
if ($article_1) {
  $icon = $article_1['icon'];
  $title = $article_1['title'];
  $content = $article_1['content'];
  if ($article_1) {
    ?>
            <div className="icon-box"><img
                src="<?php echo $icon ? $icon : 'N/A'; ?>"
                alt=" "></div>
            <div className="title"><?php echo $title ? $title : 'N/A'; ?></div>
            <p><?php echo $content ? $content : 'N/A'; ?></p>
            <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
          </li>
          <li>
            <?php
$article_2 = get_field('article_2', 9131);
if ($article_2) {
  $icon = $article_2['icon'];
  $title = $article_2['title'];
  $content = $article_2['content'];
  if ($article_2) {
    ?>
            <div className="icon-box">
				<img src="<?php echo $icon ? $icon : 'N/A'; ?>"  alt=" "></div>
            <div className="title"><?php echo $title ? $title : 'N/A'; ?></div>
            <p><?php echo $content ? $content : 'N/A'; ?></p>
            <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
          </li>
          <li>
            <?php
$article_3 = get_field('article_3', 9131);
if ($article_3) {
  $icon = $article_3['icon'];
  $title = $article_3['title'];
  $content = $article_3['content'];
  if ($article_3) {
    ?>
            <div className="icon-box"><img
                src="<?php echo $icon ? $icon : 'N/A'; ?>"
                alt=" "></div>
            <div className="title"><?php echo $title ? $title : 'N/A'; ?></div>
            <p><?php echo $content ? $content : 'N/A'; ?></p>
            <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
          </li>
          <li>
            <?php
$article_4 = get_field('article_4', 9131);
if ($article_4) {
  $icon = $article_4['icon'];
  $title = $article_4['title'];
  $content = $article_4['content'];
  if ($article_4) {
    ?>
            <div className="icon-box"><img
                src="<?php echo $icon ? $icon : 'N/A'; ?>"
                alt=" "></div>
            <div className="title"><?php echo $title ? $title : 'N/A'; ?></div>
            <p><?php echo $content ? $content : 'N/A'; ?></p>
            <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
          </li>
          <li>
            <?php
$article_5 = get_field('article_5', 9131);
if ($article_5) {
  $icon = $article_5['icon'];
  $title = $article_5['title'];
  $content = $article_5['content'];
  if ($article_5) {
    ?>
            <div className="icon-box"><img
                src="<?php echo $icon ? $icon : 'N/A'; ?>"
                alt=" "></div>
            <div className="title"><?php echo $title ? $title : 'N/A'; ?></div>
            <p><?php echo $content ? $content : 'N/A'; ?></p>
            <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
          </li>

        </ul>
      </div>
    </div>
  </div>
</section>
<!-- Why Coose Us Closed -->

<!-- Clients Review -->
<section className="clients-review wow fadeInDown">
  <div className="container">
		<div className="row">
			<div className="col-md-4 col-sm-4 first">
				<div className="counter">
					<div className="counter-content">
						<div className="counter-icon">
							<i className="fa fa-globe"></i>
						</div>
						<?php
						$links = get_field('counter_1', 9131);
						if ($links) {
						  $title = $links['title'];
						  $count = $links['count'];
						  if ($links) {
						?>
						<h3><?php echo $title ? $title : 'N/A'; ?></h3>
						<span className="counter-value"><?php echo $count ? $count : 'N/A'; ?></span>
						<?php
						  }
						} else {
						  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
						}
						?>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-4 second">
    			<h4><?php the_field('testimonials_title', 9131); ?></h4>
			</div>
			<div className="col-md-4 col-sm-4 third">
				<div className="counter">
					<div className="counter-content">
						<div className="counter-icon">
							<i className="fa fa-globe"></i>
						</div>
						<?php
						$links = get_field('counter_2', 9131);
						if ($links) {
						  $title = $links['title'];
						  $count = $links['count'];
						  if ($links) {
						?>
						<h3><?php echo $title ? $title : 'N/A'; ?></h3>
						<span className="counter-value"><?php echo $count ? $count : 'N/A'; ?></span>
						<?php
						  }
						} else {
						  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
						}
						?>
					</div>
				</div>
			</div>
		</div>
    <div className="short-code">
		<?php echo do_shortcode('[trustindex no-registration=google]');?>
    </div>
  </div>
</section>
<!-- Clients Review Closed-->


<!-- Faq Sec -->
<section className="faq-sec">
  <div className="container">

    <h4><?php the_field('faq_title', 9131); ?></h4>

    <div className="row">
      <div className="col-lg-7 content-box wow fadeInLeft">
        <div id="accordion" className="myaccordion">
          <?php
$questions__answers_1 = get_field('questions__answers_1', 9131);
if ($questions__answers_1) {
  $question = $questions__answers_1['question'];
  $answer = $questions__answers_1['answer'];
  if ($questions__answers_1) {
    ?>
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="d-flex align-items-center justify-content-between btn btn-link" data-toggle="collapse"
                  data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  <?php echo $question ? $question : 'N/A'; ?>
                  <span className="fa-stack fa-sm">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                  </span>
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <p><?php echo $answer ? $answer : 'N/A'; ?></p>
              </div>
            </div>
          </div>
          <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
          <?php
$questions__answers_2 = get_field('questions__answers_2', 9131);
if ($questions__answers_2) {
  $question = $questions__answers_2['question'];
  $answer = $questions__answers_2['answer'];
  if ($questions__answers_2) {
    ?>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <?php echo $question ? $question : 'N/A'; ?>
                  <span className="fa-stack fa-sm">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                  </span>
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                <p><?php echo $answer ? $answer : 'N/A'; ?></p>
              </div>
            </div>
          </div>
          <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
          <?php
$questions__answers_3 = get_field('questions__answers_3', 9131);
if ($questions__answers_3) {
  $question = $questions__answers_3['question'];
  $answer = $questions__answers_3['answer'];
  if ($questions__answers_3) {
    ?>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
                  <?php echo $question ? $question : 'N/A'; ?>
                  <span className="fa-stack fa-sm">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                  </span>
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                <p><?php echo $answer ? $answer : 'N/A'; ?></p>
              </div>
            </div>
          </div>
          <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
          <?php
$questions__answers_4 = get_field('questions__answers_4', 9131);
if ($questions__answers_4) {
  $question = $questions__answers_4['question'];
  $answer = $questions__answers_4['answer'];
  if ($questions__answers_4) {
    ?>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button className="d-flex align-items-center justify-content-between btn btn-link collapsed"
                  data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <?php echo $question ? $question : 'N/A'; ?>
                  <span className="fa-stack fa-sm">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                  </span>
                </button>
              </h2>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div className="card-body">
                <p><?php echo $answer ? $answer : 'N/A'; ?></p>
              </div>
            </div>
          </div>
        </div>
        <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
      </div>
      <div className="col-lg-5 img-box wow fadeInRight">

        <img src="<?php the_field('faq_image', 9131); ?>" alt="">

      </div>
    </div>
  </div>
</section>
<!-- Faq Sec Closed -->
<!-- Mancav Movers -->
<section className="mancav-movers">
  <div className="container">
    <div className="row">
      <?php
$broward_county = get_field('broward_county', 9131);
if ($broward_county) {
  $title = $broward_county['title'];
  $sub_title = $broward_county['sub_title'];
  $content = $broward_county['content'];
  $image = $broward_county['image'];
  if ($broward_county) {
    ?>
      <div className="col-lg-6 content-box wow fadeInLeft">
        <h4><?php echo $title ? $title : 'N/A'; ?></h4>
        <div className="sub-head"><?php echo $sub_title ? $sub_title : 'N/A'; ?></div>
        <?php echo $content ? $content : 'N/A'; ?>
      </div>
      <div className="col-lg-6 img-box wow fadeInRight"><img src="<?php echo $image ? $image : 'N/A'; ?>" alt=""></div>
      <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
    </div>
  </div>
</section>
<!-- Mancav Movers -->
<!-- Latest Blog -->
<section className="latest-blog wow fadeInUp">
  <div className="container">

    <h4><?php the_field('blog_title',9131);?></h4>
    <div className="row">
      <ul className="blog-list">
        <?php
			$wprecents = array(
			  'post_type' => 'post',
			  'posts_per_page' => 3,
			  'order' => 'DESC',
			  'post_status' => 'publish'
			);
			$recentsquery = new WP_Query($wprecents);
			while ($recentsquery->have_posts()) {
			  $recentsquery->the_post();
       ?>
        <li>
          <a href="<?php the_permalink(); ?>">
            <div className="content-box">
              <div className="img-box"><img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>"></div>
              <p className="post-date"><?php single_month_title('<br />') ?> </p>
              <div className="title"><?php the_title(); ?></div>
            </div>
          </a>
        </li>
        <?php } ?>
      </ul>
    </div>
  </div>
</section>
<!-- Latest Blog Closed -->
<!-- Moving specialist -->
<section className="moving-specialist">
  <div className="container">
    <div className="bg wow bounce">
      <div className="row">
        <?php
$contact_us = get_field('contact_us', 9131);
if ($contact_us) {
  $title = $contact_us['title'];
  $conatct_para = $contact_us['conatct_para'];
  $whatsapp_details = $contact_us['whatsapp_details'];
  $phone_number = $contact_us['phone_number'];
  $email = $contact_us['email'];
  $address = $contact_us['address'];
  $weekly_opening_hours = $contact_us['weekly_opening_hours'];
  if ($contact_us) {
    ?>
        <div className="col-lg-6 content-box">
          <h4><?php echo $title ? $title : 'N/A'; ?></h4>
          <?php echo $conatct_para ? $conatct_para : 'N/A'; ?>
          <div className="whatsapp">
            <?php             
              $link_url = $whatsapp_details['url'];
              $link_title = $whatsapp_details['title'];
              $link_target = $whatsapp_details['target'] ? $link['target'] : '_self';
              ?>
            <a href="<?php echo esc_url($link_url); ?>"><?php echo esc_html($link_title); ?><i className="fa fa-whatsapp"
                aria-hidden="true"></i></a>
          </div>
          <div className="row">
            <ul className="info-list">
              <li>
                <p><strong>Call Support</strong></p>
                <p>
                  <?php             
              $link_url = $phone_number['url'];
              $link_title = $phone_number['title'];
              $link_target = $phone_number['target'] ? $link['target'] : '_self';
              ?>
                  <a href="<?php echo esc_url($link_url); ?>"><?php echo esc_html($link_title); ?></a>
                </p>
              </li>
              <li>
                <p><strong>Write to us</strong></p>
                <p>
                  <?php             
              $link_url = $email['url'];
              $link_title = $email['title'];
              $link_target = $email['target'] ? $link['target'] : '_self';
              ?>
                  <a href="<?php echo esc_url($link_url); ?>"><?php echo esc_html($link_title); ?></a>
                </p>
              </li>
              <li>
                <p><strong>Address</strong></p>
                <p><?php echo $address ? $address : 'N/A'; ?></p>
              </li>
              <li>
				<?php echo $weekly_opening_hours ? $weekly_opening_hours : 'N/A'; ?>
              </li>
            </ul>
          </div>
        </div>
        <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>
        <div className="col-lg-6 form-box">
        <iframe style="width: 100%; height: 100%; min-height: 530px; min-width: 400px; max-width: 100%; margin: 0; border-width: 0;background-color: black !important; background:black !important;" src="https://portal.mancavmovers.com/embedded/?companyId=a0d8dfad-4337-40d1-9f75-ad8901884ba0&amp;branchId=de763f4b-9528-4701-aeab-ad8901884d1e&amp;mode=short" frameborder="0"><br />
          </iframe>

        </div>
      </div>
    </div>
  </div>
</section>
<!-- Moving specialist Closed -->
<!-- Our Work Gallery -->
<section className="work-gallery wow pulse">
  <div className="container-fluid">
    <h4><?php the_field('gallery_title', 9131); ?></h4>
    <div className="owl-carousel owl-theme gallery-slide">
      <?php
$gallery_image = get_field('gallery_image', 9131);
if ($gallery_image) {
  $image_1 = $gallery_image['image_1'];
  $image_2 = $gallery_image['image_2'];
  $image_3 = $gallery_image['image_3'];
  $image_4 = $gallery_image['image_4'];
  $image_5 = $gallery_image['image_5'];
  $image_6 = $gallery_image['image_6'];
  $image_7 = $gallery_image['image_7'];
  $image_8 = $gallery_image['image_8'];
  $image_9 = $gallery_image['image_9'];
  $image_10 = $gallery_image['image_10'];
  if ($gallery_image) {
    ?>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_1 ? $image_1 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_1 ? $image_1 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_2 ? $image_2 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_2 ? $image_2 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_3 ? $image_3 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_3 ? $image_3 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_4 ? $image_4 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_4 ? $image_4 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_5 ? $image_5 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_5 ? $image_5 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_6 ? $image_6 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_6 ? $image_6 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_7 ? $image_7 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_7 ? $image_7 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_8 ? $image_8 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_8 ? $image_8 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_9 ? $image_9 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_9 ? $image_9 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <div className="item">
        <div className="slide-content">
          <a href="<?php echo $image_10 ? $image_10 : 'N/A'; ?>" data-lightbox="Our Work Gallery">
            <img src="<?php echo $image_10 ? $image_10 : 'N/A'; ?>" alt="">
          </a>
        </div>
      </div>
      <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}
?>

    </div>
  </div>
</section>
<!-- Our Work Gallery Closed -->
<!-- Google Map -->
<section className="google-map wow fadeInUp">
      <?php
$map = get_field('map', 9131);
if ($map) {
  $google_map_code = $map['google_map_code'];
  if ($map) {
    ?>
	<div>
	<?php echo $google_map_code ? $google_map_code : 'N/A'; ?>
	</div>
      <?php
  }
} else {
  echo '<div className="detail_adress"><p>No DATA available.</p></div>';
}?>
</section>
<!-- Google Map Closed -->

<?php get_footer(); ?>