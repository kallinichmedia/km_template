#
# Add SQL definition of database tables
#


CREATE TABLE pages (
    km_template_background_color varchar(255) DEFAULT 'darkblue' NOT NULL,    
    km_template_no_structure tinyint(1) DEFAULT '0' NOT NULL,

    
);


CREATE TABLE tt_content (
    km_template_header_css varchar(255) DEFAULT 'no-class' NOT NULL,
    tx_kmtemplate_animation_text varchar(255) DEFAULT '' NOT NULL,
    tx_kmtemplate_animation_type varchar(255) DEFAULT '' NOT NULL,
);
