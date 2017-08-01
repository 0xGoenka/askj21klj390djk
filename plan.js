function toggleDiv(id)
{
    var div = document.getElementById(id);
    if (getStyle(id, 'visibility') == 'hidden')
    {
        div.style.visibility = 'visible';
    }
    else {
        div.style.visibility = 'hidden';
    }
}

function getStyle(id, property)
{
    var element = document.getElementById(id),
    style = window.getComputedStyle(element),
    ret = style.getPropertyValue(property);
    return ret;
}
