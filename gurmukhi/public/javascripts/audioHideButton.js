/**
 * Created by r on 25/10/2015.
 */
$(function(){
    $('.audioPlayer').addClass('hide');

    $('.audiobtnPlay').click(function() {
        var player = $(this);
        var playbtn = this.id;
        var player = $('#'+playbtn).data('link');
        var pauseButton = $('#'+playbtn).data('other');
        document.getElementById(player).play();
        $('#'+ playbtn ).addClass('hide');
        $('#'+ pauseButton ).removeClass('hide');
    });

    $('.audiobtnPause').click(function() {
        var pause = $(this);
        var pausebtn = this.id;
        var player = $('#'+pausebtn).data('link');
        var playButton = $('#'+pausebtn).data('other');

        document.getElementById(player).pause();
        $('#'+ pausebtn ).addClass('hide');
        $('#'+ playButton ).removeClass('hide');
    });

    $('.audioPlayer').on('ended', function() {
        $('#idj-pause-button').addClass('hide');
        $('#idj-play-button').removeClass('hide');
        $('#peaks-audio').load();

        var player = $(this);
        var playerId = this.id;
        var playButton = $('#'+playerId).data('play');
        var pauseButton = $('#'+playerId).data('pause');

        $('#'+ pauseButton ).addClass('hide');
        $('#'+ playButton ).removeClass('hide');
    });
});
